"use client";

import { useActiveSectionContext } from "@/context/active-section-context";
import { RealTimeClock } from "@/lib/utils";
import React from "react";

const Footer = () => {
  const { activeSection } = useActiveSectionContext();

  return (
    <footer
      className={`${activeSection === "Contact" ? "absolute" : "hidden"} bottom-20 flex items-center gap-10 justify-self-end`}
    >
      <div>
        <span>2024 </span>
        <span>JOHN BARS</span>
      </div>
      <div>
        <h2 className="font-semibold">LOCAL TIME</h2>
        <p className="font-semibold text-[#e8e8e8]">
          <RealTimeClock />
        </p>
      </div>
    </footer>
  );
};

export default Footer;
