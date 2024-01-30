"use client";

import { useActiveSectionContext } from "@/context/active-section-context";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export default function Skills() {
  const { ref, inView } = useInView({ threshold: 0.5 });
  const { setActiveSection } = useActiveSectionContext();

  useEffect(() => {
    if (inView) {
      setActiveSection("Skills");
    }
  }, [inView, setActiveSection]);

  return (
    <section ref={ref} id="skills" className="section">
      <h2 className="title">Skills</h2>
      <div>Skills</div>
    </section>
  );
}
