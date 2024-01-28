"use client";
import { useActiveSectionContext } from "@/context/ActiveSectionContext";
import { useIntersectionObserver } from "@/lib/hooks";

export default function About() {
  const { setActiveSection } = useActiveSectionContext();
  const aboutRef = useIntersectionObserver({
    targetSelector: "#about",
    onIntersect: () => {
      setActiveSection("#about");
    },
  });

  return (
    <section
      ref={aboutRef}
      id="about"
      className="mb-16 h-5/6 scroll-mt-16 bg-slate-900 md:mb-24 lg:mb-36 lg:scroll-mt-24"
    >
      About
    </section>
  );
}
