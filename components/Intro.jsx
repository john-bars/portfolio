"use client";

import { socials } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import Image from "next/image";
import Link from "next/link";

export default function Intro() {
  const { ref } = useSectionInView("Intro");

  return (
    <section ref={ref} id="intro" className="section">
      <h1 className="intro">John Bars Quipia</h1>
      <p className="mt-4 opacity-70 max-md:self-center md:text-3xl">
        React Front End Developer
      </p>
      <ul className="mt-3 flex justify-center gap-5 md:hidden">
        {socials.map((social) => (
          <li key={social.name}>
            <Link
              href={social.href}
              target="_blank"
              rel="noreferrer noopener"
              title={social.name}
            >
              <Image
                src={social.imgSrc}
                alt={`${social.name} icon`}
                width={20}
                height={20}
                className="opacity-40 invert hover:opacity-100"
              />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
