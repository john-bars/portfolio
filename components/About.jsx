"use client";

import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section id="about" ref={ref} className="section">
      <h2 className="title">About Me</h2>
      <p className="paragraph">
        In 2020, following my graduation and successful completion of the
        licensure exam, I embarked on a career as an Automated Teller Machine
        (ATM) technician, dedicating two years to working on the mechanical and
        electronic components of these machines. While immersed in this role, my
        curiosity about firmware development sparked, prompting me to explore
        online programming courses.
      </p>
      <p className="paragraph">
        Surprisingly, my journey led me to the realm of Web Development, a field
        seemingly distant from my original focus. Nevertheless, the fusion of my
        passion for mechatronics and programming inspired me to delve into the
        intricacies of Web development. Although my initial goal was firmware
        development, this unexpected path has proven to be both fulfilling and
        enlightening.
      </p>
      <p className="paragraph">
        Fast forward to the present, I&apos;ve acquired proficiency in creating
        websites using{" "}
        <span className="font-semibold italic text-white">React</span>,{" "}
        <span className="font-semibold italic text-white">TypeScript</span>, and{" "}
        <span className="font-semibold italic text-white">Next.js</span>. My
        aspirations extend beyond front-end development, as I&apos;m now
        actively working towards mastering backend technologies with the
        ultimate aim of becoming a proficient full-stack developer. Despite the
        detour from my initial focus, my journey in the world of technology
        continues, and I still harbor the desire to delve into firmware
        development in the future.
      </p>
    </motion.section>
  );
}
