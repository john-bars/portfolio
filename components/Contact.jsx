"use client";

import { useSectionInView } from "@/lib/hooks";
import Link from "next/link";

export default function Contact() {
  const { ref } = useSectionInView("Contact");

  return (
    <section ref={ref} id="contact" className="section">
      <h2 className="title">Contact me</h2>
      <p className="-mt-6 text-gray-700 dark:text-white/80">
        Please contact me directly at{" "}
        <Link className="underline" href="mailto:john.barsq@gmail.com">
          john.barsq@gmail.com
        </Link>
      </p>
      <footer></footer>
    </section>
  );
}
