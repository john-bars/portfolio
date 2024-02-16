"use client";

import React from "react";
import { LuCopyright } from "react-icons/lu";
import { useActiveSectionContext } from "@/context/active-section-context";
// import { RealTimeClock } from "@/lib/utils";

const Footer = () => {
  const { activeSection } = useActiveSectionContext();

  return (
    <footer
      className={`${activeSection === "Contact" ? "fixed" : "hidden"} bottom-10 left-1/2 -translate-x-1/2 md:bottom-20`}
    >
      <div className="flex items-center gap-1 text-lg font-semibold text-neutral-300">
        <LuCopyright />
        <span>John Bars</span>
        <span>2024</span>
      </div>
      {/* <div className="flex gap-2">
        <h2 className="font-semibold">Local Time: </h2>
        <RealTimeClock />
      </div> */}
    </footer>
  );
};

export default Footer;
