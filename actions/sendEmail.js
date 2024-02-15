"use server";

import React from "react";
import { Resend } from "resend";
import { getErrorMessage, validateString } from "@/lib/utils";
import ContactFormEmail from "@/email/ContactFormEmail";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData) => {
  const senderName = formData.get("senderName").trim();
  const senderEmail = formData.get("senderEmail").trim();
  const subject = formData.get("subject").trim();
  const message = formData.get("message").trim();

  const sender = senderName !== "" ? senderName : senderEmail;

  if (!validateString(senderEmail, 100)) {
    return { error: "Invalid sender email" };
  }

  if (!validateString(message, 5000)) {
    return { error: "Invalid message" };
  }

  const { data, error } = await resend.emails.send({
    from: `Portfolio Message from ${sender} <onboarding@resend.dev>`,
    to: "john.barsq@gmail.com",
    subject: subject !== "" ? subject : "Message from your Portfolio Site",
    reply_to: senderEmail,
    react: React.createElement(ContactFormEmail, {
      senderName,
      senderEmail,
      message,
      subject,
    }),
  });
  if (error) {
    return { error: getErrorMessage(error) };
  }
  return { data };
};
