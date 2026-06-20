// app/api/calendar/route.ts
import { db } from "@/db/drizzle";
import { account } from "@/drizzle/schema";
import { auth } from "@/lib/auth"; // Apnar auth file
import { and, eq } from "drizzle-orm";
import { google } from "googleapis";
import { headers } from "next/headers";

export async function GET(req: Request) {
  // 1. Current user session check kora
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    return new Response("Unauthorized", { status: 401 });
  }

  // 2. Drizzle diye Neon theke user er Google account ebang Access Token khuje ber kora
  const [userAccount] = await db
    .select()
    .from(account)
    .where(
      and(
        eq(account.userId, session.user.id),
        eq(account.providerId, "google"),
      ),
    );

  if (!userAccount || !userAccount.accessToken) {
    return new Response("Google account access token not found", {
      status: 404,
    });
  }

  // 3. Google API te token set kora
  const oauth2Client = new google.auth.OAuth2(
    process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_CLIENT_SECRET,
  );
  oauth2Client.setCredentials({
    access_token: userAccount.accessToken,
    refresh_token: userAccount.refreshToken,
  });

  const calendar = google.calendar({ version: "v3", auth: oauth2Client });

  try {
    // 4. Calendar theke data fetch kora
    const response = await calendar.events.list({
      calendarId: "primary",
      timeMin: new Date().toISOString(),
      maxResults: 10,
      singleEvents: true,
      orderBy: "startTime",
    });

    return Response.json(response.data);
  } catch (error) {
    console.error("Calendar fetch error:", error);
    return new Response("Failed to fetch calendar events", { status: 500 });
  }
}
