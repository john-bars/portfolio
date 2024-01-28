"use client";
import { useActiveSectionContext } from "@/context/ActiveSectionContext";
import Link from "next/link";

const NavLink = ({ name, hash }) => {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();
  console.log("active section: ", activeSection);

  return (
    <Link
      href={hash}
      className={`group flex items-center py-3`}
      onClick={() => {
        setActiveSection(hash);
        setTimeOfLastClick(Date.now());
      }}
    >
      <span
        className={`${activeSection === hash ? "w-16 bg-slate-200" : "w-8"} mr-4 h-px bg-slate-600 transition-all group-hover:bg-slate-200 group-focus-visible:bg-slate-200 motion-reduce:transition-none`}
      ></span>
      <span
        className={`${activeSection === hash && "text-slate-100"} flex text-xs font-bold uppercase tracking-widest text-slate-600 group-hover:text-slate-200 
                  group-focus-visible:text-slate-200`}
      >
        {name}
      </span>
    </Link>
  );
};

export default NavLink;
