"use server";

import React from "react";
import { Resend } from "resend";
import { getErrorMessage, validateString } from "@/lib/utils";
import ContactFormEmail from "@/email/ContactFormEmail";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData) => {
  const senderName = formData.get("senderName");
  const senderEmail = formData.get("senderEmail");
  const subject =
    formData.get("subject") !== ""
      ? formData.get("subject")
      : "Message from your Portfolio Site";
  const message = formData.get("message");

  console.log(senderName, senderEmail, subject, message);

  if (!validateString(senderEmail, 100)) {
    return { error: "Invalid sender email" };
  }

  if (!validateString(message, 5000)) {
    return { error: "Invalid message" };
  }

  const { data, error } = await resend.emails.send({
    from: "Portfolio Message <onboarding@resend.dev>",
    to: "john.barsq@gmail.com",
    subject,
    // text: message,
    reply_to: senderEmail,
    react: React.createElement(ContactFormEmail, {
      senderName,
      senderEmail,
      message,
    }),
  });
  if (error) {
    return { error: getErrorMessage(error) };
  }
  return { data };
};
