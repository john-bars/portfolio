import { Container, Hr, Html, Text } from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";
import React from "react";

export default function ContactFormEmail({
  message,
  senderName,
  senderEmail,
  subject,
}) {
  return (
    <Html>
      <Tailwind>
        <Container className="rounded-md border-black bg-gray-100 px-10 py-4">
          <Text>
            <pre className="font-sans text-neutral-200">{message}</pre>
          </Text>
          <Hr />
          <Text>
            <p className="text-xs leading-3 text-neutral-300">
              Sender&apos;s Name:{" "}
              <span className="italic text-neutral-200">
                {senderName !== "" ? senderName : "Anonymous"}
              </span>
            </p>
            <p className="text-xs leading-3 text-neutral-300">
              Sender&apos;s Email:{" "}
              <span className="italic text-blue-500">{senderEmail}</span>
            </p>
            {subject !== "" && (
              <p className="text-xs leading-3 text-neutral-300">
                Subject:{" "}
                <span className="italic text-neutral-200">{subject}</span>
              </p>
            )}
          </Text>
        </Container>
      </Tailwind>
    </Html>
  );
}
