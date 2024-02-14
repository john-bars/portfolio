"use client";

import { skills } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";

export default function Skills() {
  const { ref } = useSectionInView("Skills");

  return (
    <section ref={ref} id="skills" className="section">
      <h2 className="title">Skills</h2>{" "}
      <ul className="flex max-w-sm flex-wrap gap-4 lg:max-w-md">
        {skills.map((skill, index) => (
          <li
            key={index}
            className="flex items-center justify-center rounded-full border border-neutral-400 p-5 text-sm text-neutral-400 md:p-6 md:text-base lg:p-8"
          >
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
}
