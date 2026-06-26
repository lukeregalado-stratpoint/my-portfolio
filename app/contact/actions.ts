"use server";

import nodemailer from "nodemailer";

type State = { success: boolean; error?: string } | null;

export async function sendMessage(_prev: State, formData: FormData): Promise<State> {
  const name    = formData.get("name")    as string;
  const email   = formData.get("email")   as string;
  const message = formData.get("message") as string;

  if (!name || !email || !message) {
    return { success: false, error: "All fields are required." };
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      type:         "OAuth2",
      user:         process.env.GMAIL_USER,
      clientId:     process.env.GMAIL_CLIENT_ID,
      clientSecret: process.env.GMAIL_CLIENT_SECRET,
      refreshToken: process.env.GMAIL_REFRESH_TOKEN,
    },
  });

  try {
    await transporter.sendMail({
      from:    `"Portfolio Contact" <${process.env.GMAIL_USER}>`,
      to:      process.env.GMAIL_USER,
      subject: `[PORTFOLIO] New message from ${name}`,
      text:    `From: ${name} <${email}>\n\n${message}`,
    });
    await transporter.sendMail({
      from:    `"Luke Regalado" <${process.env.GMAIL_USER}>`,
      to:      email,
      subject: `Got your message!`,
      text:    `Hi ${name},\n\nThanks for reaching out; I'll get back to you soon.\n\n— Luke`,
    });
    return { success: true };
  } catch (err) {
    console.error("Mail error:", err);
    return { success: false, error: "Failed to send. Please try again." };
  }
}