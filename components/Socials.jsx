import { socials } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Socials = () => {
  return (
    <ul
      aria-label="Socials"
      className="socials"
      // className="fixed bottom-24 right-20 flex flex-col gap-2"
      // className="fixed bottom-24 right-24 flex items-center gap-2 md:mb-2 md:justify-center lg:mb-6 lg:flex-col lg:items-start"
    >
      {socials.map((social) => (
        <li key={social.name}>
          <Link
            href={social.href}
            target="_blank"
            rel="noreferrer noopener"
            aria-label={`${social.name} (opens in a new tab)`}
            title={social.name}
            className="group flex justify-end gap-3"
          >
            <span className="hidden text-xs font-semibold tracking-widest text-blue-500 md:group-hover:block">
              {social.name}
            </span>
            <Image
              src={social.imgSrc}
              alt={`${social.name} icon`}
              width={18}
              height={18}
              className="opacity-40 invert hover:opacity-100"
            />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Socials;
