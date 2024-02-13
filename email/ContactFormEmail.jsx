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

export default function ContactFormEmail({ message, senderName, senderEmail }) {
  return (
    <Html>
      <Head />
      <Tailwind>
        <Body className="bg-gray-100 text-black">
          <Container>
            <Section className="my-10 rounded-md border-black bg-white px-10 py-4">
              <Heading className="leading-tight">
                You received the following message from{" "}
                {senderName !== "" ? senderName : "the contact form"}
              </Heading>
              <Text>{message}</Text>
              <Hr />
              <Text>
                The sender&apos;s email is:{" "}
                <span className="italic text-blue-500">{senderEmail}</span>
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
