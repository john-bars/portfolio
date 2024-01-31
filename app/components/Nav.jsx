"use client";

import Link from "next/link";
import { NavLink } from ".";

export default function Nav() {
  return (
    <nav className="nav">
      <Link href="#hero">
        <logo className="text-2xl font-bold tracking-tight text-white max-lg:hidden">
          bars.
        </logo>
      </Link>
      <NavLink />
    </nav>
  );
}
