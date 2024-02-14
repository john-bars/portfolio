import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Section,
  Text,
} from "@react-email/components";
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
      <Head />
      <Tailwind>
        <Body className="bg-gray-100 text-black">
          <Container>
            <Section className="my-10 rounded-md border-black bg-white px-10 py-4">
              <Heading className="text-xl leading-tight">
                You received the following message from{" "}
                {senderName !== "" ? senderName : "the contact form"}
              </Heading>
              {subject !== "" && (
                <Text className="text-lg">subject: {subject}</Text>
              )}
              <Text>{message}</Text>
              <Hr />
              <Text>
                Sender&apos;s name:{" "}
                <span className="italic text-blue-500">
                  {senderName !== "" ? senderName : "Anonymous"}
                </span>
              </Text>
              <Text>
                Sender&apos;s email:{" "}
                <span className="italic text-blue-500">{senderEmail}</span>
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
