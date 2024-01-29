"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const NavLink = ({ name, hash, activeSection, setActiveSection }) => {
  return (
    <Link
      href={hash}
      onClick={() => setActiveSection(name)}
      className={`group flex items-center py-3`}
    >
      <motion.span
        layoutId="activeSection"
        transition={{
          type: "spring",
          stiffness: 380,
          damping: 30,
        }}
        className={`mr-4 h-px transition-all group-hover:bg-slate-200 group-focus-visible:bg-slate-200 motion-reduce:transition-none ${
          activeSection === name ? "w-16 bg-white" : "w-8 bg-slate-600"
        }`}
      ></motion.span>
      <motion.span
        layoutId="activeSection"
        transition={{
          type: "spring",
          stiffness: 380,
          damping: 30,
        }}
        className={`flex text-xs font-bold uppercase tracking-widest group-hover:text-slate-200 group-focus-visible:text-slate-200 ${
          activeSection === name ? "text-white" : "text-slate-600"
        }`}
      >
        {name}
      </motion.span>
    </Link>
  );
};

export default NavLink;
