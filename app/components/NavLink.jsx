"use client";

import { useActiveSectionContext } from "@/context/active-section-context";
import { links } from "@/lib/data";
import Link from "next/link";
import { motion } from "framer-motion";

const NavLink = () => {
  const { activeSection, setActiveSection } = useActiveSectionContext();

  return (
    <ul className="flex w-full justify-center gap-3 lg:flex-col">
      {links.map((link) => (
        <li key={link.hash}>
          <Link
            href={link.hash}
            onClick={() => setActiveSection(link.name)}
            className="flex items-start"
          >
            <motion.span
              layoutId="activeSection"
              transition={{
                type: "spring",
                stiffness: 380,
                damping: 30,
              }}
              className={`text-xs font-bold uppercase tracking-widest hover:text-slate-200 focus-visible:text-slate-200 ${
                activeSection === link.name ? "text-white" : "text-slate-600"
              }`}
            >
              {link.name}
            </motion.span>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavLink;
