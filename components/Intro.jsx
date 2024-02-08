"use client";

import { useSectionInView } from "@/lib/hooks";

export default function Intro() {
  const { ref } = useSectionInView("Intro");

  return (
    <section ref={ref} id="intro" className="section">
      <h1 className="intro">John Bars Quipia</h1>
      <p className="mt-4 opacity-70 max-md:self-center lg:text-3xl">
        React Front End Developer
      </p>
      {/* 
      <div className="absolute block md:bottom-20 lg:bottom-24">
        <p className="self-center">
          <span>Tech Stack | </span>
          <span>HTML | </span>
          <span>CSS | </span>
          <span>JAVASCRIPT | </span>
          <span>TYPESCRIPT | </span>
          <span>REACT | </span>
          <span>NEXT JS</span>
        </p>
      </div> */}
    </section>
  );
}
