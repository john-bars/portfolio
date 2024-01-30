"use client";

import { links } from "@/lib/data";
import { motion } from "framer-motion";
import { useActiveSectionContext } from "@/context/active-section-context";
import Link from "next/link";

export default function Nav() {
  const { activeSection, setActiveSection } = useActiveSectionContext();

  return (
    <nav className="nav">
      <Link href="#hero">
        <logo className="text-2xl font-bold tracking-tight text-white">
          bars.
        </logo>
      </Link>

      <ul className="">
        {links.map((link) => (
          <li key={link.hash}>
            <Link
              href={link.hash}
              onClick={() => setActiveSection(link.name)}
              className={`group flex items-center py-3`}
            >
              <motion.span
                layoutId="activeSection"
                transition={{
                  type: "spring",
                  stiffness: 380,
                  damping: 30,
                }}
                className={`flex text-xs font-bold uppercase tracking-widest group-hover:text-slate-200 group-focus-visible:text-slate-200 ${
                  activeSection === link.name ? "text-white" : "text-slate-600"
                }`}
              >
                {link.name}
              </motion.span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
