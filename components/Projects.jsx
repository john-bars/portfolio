"use client";

import { useSectionInView } from "@/lib/hooks";
import { useState } from "react";
import { ProjectInfo } from ".";

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
        <ProjectInfo
          title="DevFlow"
          info={
            <>
              Devflow is a web app built using Next.js and TypeScript. It&apos;s
              similar to Stack Overflow where users can ask questions to the
              community. Additionally, it utilizes OpenAI&apos;s API to generate
              AI answers and provides users with the ability to find available
              jobs.
            </>
          }
          isVisible={visibleInfo === "DevFlow"}
          onClick={toggleInfo}
          images={{
            web: [
              "/images/devflow-web-dark.png",
              "/images/devflow-web-light.png",
            ],
            mobile: [
              "/images/devflow-tablet-dark.png",
              "/images/devflow-tablet-light.png",
              "/images/devflow-mobile-dark.png",
              "/images/devflow-mobile-light.png",
            ],
          }}
        />
        <ProjectInfo
          title="Portfolio Website"
          info="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
          isVisible={visibleInfo === "Portfolio Website"}
          onClick={toggleInfo}
        />
      </div>
    </section>
  );
}
