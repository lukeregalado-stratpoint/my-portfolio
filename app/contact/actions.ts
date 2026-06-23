"use server";

type State = { success: boolean; error?: string } | null;

export async function sendMessage(_prev: State, formData: FormData): Promise<State> {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;

  if (!name || !email || !message) {
    return { success: false, error: "All fields are required." };
  }

  // swap this out for Resend, Nodemailer, etc. later
  console.log("New message:", { name, email, message });

  return { success: true };
}