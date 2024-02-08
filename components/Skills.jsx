"use client";

import { useSectionInView } from "@/lib/hooks";

export default function Skills() {
  const { ref } = useSectionInView("Skills");

  return (
    <section ref={ref} id="skills" className="section">
      <h2 className="title">Skills</h2>
      <div>Skills</div>
    </section>
  );
}
