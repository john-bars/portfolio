"use client";

import { useSectionInView } from "@/lib/hooks";
import { useState } from "react";
import { ProjectInfo } from ".";
import { portfolioProjects } from "@/lib/data";

export default function Projects() {
  const { ref } = useSectionInView("Projects");

  const [visibleInfo, setVisibleInfo] = useState("");

  const toggleInfo = (title) => {
    // setTimeout(() => {
    setVisibleInfo((prevState) => (prevState === title ? "" : title));
    // }, 1000);
  };

  return (
    <section id="projects" ref={ref} className="section">
      <h2 className="title">My Projects</h2>
      <div className="flex flex-col gap-5">
        {portfolioProjects.map((project) => (
          <ProjectInfo
            key={project.title}
            title={project.title}
            info={project.info}
            isVisible={visibleInfo === project.title}
            onClick={toggleInfo}
            images={project.images}
            code={project.github}
            site={project.site}
          />
        ))}
      </div>
    </section>
  );
}
