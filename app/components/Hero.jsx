"use client";

import { useActiveSectionContext } from "@/context/active-section-context";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const Hero = () => {
  const { ref, inView } = useInView({ threshold: 0.5 });
  const { setActiveSection } = useActiveSectionContext();

  useEffect(() => {
    if (inView) {
      setActiveSection("");
    }
  }, [inView, setActiveSection]);

  return (
    <section ref={ref} id="hero" className="section">
      <h1 className="hero">Hi there, I&apos;m</h1>
      <h1 className="hero self-center">John Bars Quipia</h1>
      <p className="self-center text-3xl leading-loose opacity-70">
        A React Web Developer
      </p>
    </section>
  );
};

export default Hero;
