"use client";

import { links, socials } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import { NavLink } from ".";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Header() {
  const { activeSection, setActiveSection } = useActiveSectionContext();

  return (
    <header className="hidden lg:sticky lg:inset-y-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
      <div>
        <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
          John Bars Quipia
        </h1>
        <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
          React Web Developer
        </h2>
        <p className="mt-4 max-w-xs leading-normal">
          I build pixel-perfect, engaging, and accessible digital experiences
        </p>
        <nav className="hidden lg:block">
          <ul className="mt-16 w-max">
            {links.map((link) => (
              <li key={link.hash}>
                <NavLink
                  name={link.name}
                  hash={link.hash}
                  activeSection={activeSection}
                  setActiveSection={setActiveSection}
                />
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <ul
        aria-label="Socials"
        className="flex items-center gap-5 max-lg:hidden"
      >
        {socials.map((social) => (
          <li key={social.name}>
            <Link
              href={social.href}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={`${social.name} (opens in a new tab)`}
              title={social.name}
            >
              <Image
                src={social.imgSrc}
                alt={`${social.name} icon`}
                width={24}
                height={24}
                className="invert"
              />
              <span className="sr-only">{social.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </header>
  );
}
