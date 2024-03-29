import { socials } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Socials = () => {
  return (
    <ul aria-label="Socials" className="socials">
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
