"use client";

import { useSectionInView } from "@/lib/hooks";
import { useState } from "react";
import { ProjectInfo } from ".";

export default function Projects() {
  const { ref } = useSectionInView("Projects");

  const [visibleInfo, setVisibleInfo] = useState("");

  const toggleInfo = (title) => {
    setVisibleInfo((prevState) => (prevState === title ? "" : title));
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
            web: "/images/devflow.jpg",
            tablet: "/images/devflow-tablet.jpg",
            mobile: "/images/devflow-mobile.jpg",
          }}
        />
        <ProjectInfo
          title="Portfolio Website"
          info="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
          isVisible={visibleInfo === "Portfolio Website"}
          onClick={toggleInfo}
          images={{
            web: "/images/devflow.jpg",
            tablet: "/images/devflow-tablet.jpg",
            mobile: "/images/devflow-mobile.jpg",
          }}
        />
      </div>

      {/* <div>
        <div className="relative w-full">
          <Image
            src="/images/devflow.jpg"
            alt="desktop-screenshot"
            width={640}
            height={200}
            className="absolute bottom-0 z-10 h-auto w-3/4"
          />
          <Image
            src="/images/devflow-tablet.jpg"
            alt="desktop-screenshot"
            width={640}
            height={400}
            className="absolute bottom-0 right-[10%] z-20 h-auto w-1/4"
          />
          <Image
            src="/images/devflow-mobile.jpg"
            alt="desktop-screenshot"
            width={640}
            height={400}
            className="absolute bottom-0 right-0 z-30 h-auto w-[10%]"
          />
        </div>
      </div> */}
    </section>
  );
}
