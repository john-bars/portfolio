"use client";

import { useSectionInView } from "@/lib/hooks";
import Link from "next/link";

import { Footer } from ".";
import ContactForm from "./ContactForm";
import { useState } from "react";

export default function Contact() {
  const { ref } = useSectionInView("Contact");
  const [showForm, setShowForm] = useState(false);

  const toggleShowForm = () => {
    setShowForm((prev) => !prev);
  };

  return (
    <section ref={ref} id="contact" className="section text-xl">
      <h2 className="title">Get in Touch</h2>
      <h3 className="italic text-neutral-300">
        Looking for a <span className="font-semibold">Web Developer</span>?
      </h3>
      <p className="italic text-neutral-400">
        Please drop me a message at<span className="sm:hidden">:</span>
        <Link
          href="mailto:john.barsq@gmail.com"
          className="text-center font-semibold text-blue-500 max-sm:block"
        >
          {" "}
          john.barsq@gmail.com
        </Link>
      </p>
      <p className="italic text-neutral-400">
        or use this{" "}
        <span
          onClick={toggleShowForm}
          className="cursor-pointer italic text-blue-500"
        >
          Form
        </span>
        .
      </p>
      {showForm && <ContactForm />}

      <Footer />
    </section>
  );
}
