"use client";

import { useActiveSectionContext } from "@/context/active-section-context";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export default function Contact() {
  const { ref, inView } = useInView({
    // rootMargin: "-10% 0px",
    // threshold: 0.75,
  });
  const { setActiveSection } = useActiveSectionContext();

  useEffect(() => {
    if (inView) {
      setActiveSection("Contact");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);
  return (
    <section
      ref={ref}
      id="contact"
      className="min-h-[25svh] scroll-mt-16 bg-slate-500 lg:scroll-mt-24"
    >
      Contact
    </section>
  );
}
