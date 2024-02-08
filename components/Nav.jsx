"use client";

import { useActiveSectionContext } from "@/context/active-section-context";
import { links } from "@/lib/data";
import Link from "next/link";
import { motion } from "framer-motion";

const Nav = () => {
  const { activeSection, setActiveSection } = useActiveSectionContext();

  return (
    <nav className="nav">
      <ul className="flex gap-5 md:flex-col">
        {links.map((link) => (
          <li key={link.hash}>
            <Link
              href={link.hash}
              onClick={() => setActiveSection(link.name)}
              className="group flex h-6 items-center justify-end gap-3"
            >
              <motion.span
                layoutId="activeSection"
                transition={{
                  type: "spring",
                  stiffness: 380,
                  damping: 30,
                }}
                className={`hidden text-xs font-semibold uppercase tracking-widest hover:text-slate-200 focus-visible:text-slate-200 md:group-hover:block ${
                  activeSection === link.name ? "text-white" : "text-slate-600"
                }`}
              >
                {link.name}
              </motion.span>

              <span
                className={`${
                  activeSection === link.name ? "bg-white" : "bg-slate-600"
                } size-3 rounded-full`}
              ></span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
