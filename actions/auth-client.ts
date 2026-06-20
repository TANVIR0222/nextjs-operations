"use server";

import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function signInWithGithub(formData: FormData) {
  let redirectUrl: string | null = null;

  try {
    const result = await auth.api.signInSocial({
      body: {
        provider: "github",
        callbackURL: "/dashboard",
      },
    });

    if (result?.url) redirectUrl = result.url;
  } catch (error) {
    console.log("Error in signInSocial (github):", error);
  }

  if (redirectUrl) redirect(redirectUrl);
}

export async function signInWithGoogle(formData: FormData) {
  let redirectUrl: string | null = null;

  try {
    const result = await auth.api.signInSocial({
      body: {
        provider: "google",
        callbackURL: "/dashboard",
      },
    });

    if (result?.url) redirectUrl = result.url;
  } catch (error) {
    console.log("Error in signInSocial (google):", error);
  }

  if (redirectUrl) redirect(redirectUrl);
}
