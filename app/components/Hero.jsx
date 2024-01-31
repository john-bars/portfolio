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
      {/* <div className="flex flex-col"> */}
      <h1 className="hero">Hi there, I&apos;m</h1>
      <h1 className="hero self-center">John Bars Quipia</h1>
      <p className="self-center leading-loose opacity-70 lg:text-3xl">
        A React Web Developer
      </p>
      {/* </div> */}
    </section>
  );
};

export default Hero;
