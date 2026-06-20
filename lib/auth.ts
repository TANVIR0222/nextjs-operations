import { db } from "@/db/drizzle";
import * as schema from "@/schema/auth-schema";
import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "pg", // or "mysql", "sqlite"
    schema,
  }),
  emailAndPassword: {
    enabled: true,
  },
  socialProviders: {
    github: {
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
    },
    // Ekhane 'socialProviders' namti abar lekhar dorkar nei,
    // github ebang google ekoi level e thakbe
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      // Nicher line duto khub-i dorkar refresh token ebang permission er jonno
      accessType: "offline",
      prompt: "consent",
      scope: [
        "openid", // better-auth er default
        "profile",
        "email",
        "https://www.googleapis.com/auth/calendar.readonly", // Ei scope ti thaktei hobe
      ],
    },
  },
  account: {
    skipStateCookieCheck: true,
  },
});
