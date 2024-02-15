"use client";

import { useSectionInView } from "@/lib/hooks";

export default function Intro() {
  const { ref } = useSectionInView("Intro");

  return (
    <section ref={ref} id="intro" className="section">
      <h1 className="intro">John Bars Quipia</h1>
      <p className="mt-4 opacity-70 max-md:self-center md:text-3xl">
        React Front End Developer
      </p>
    </section>
  );
}
