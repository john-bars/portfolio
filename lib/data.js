export const links = [
  {
    name: "Intro",
    hash: "#intro",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
];

export const socials = [
  {
    name: "GitHub",
    href: "https://github.com/john-bars",
    imgSrc: "icons/github_icon.svg",
  },
  {
    name: "Email Me",
    href: "mailto:john.barsq@gmail.com",
    imgSrc: "icons/email_icon.svg",
  },
];

export const skills = [
  "JavaScript",
  "TypeScript",
  "HTML5",
  "CSS3",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Node.js",
  "Git",
  "MongoDB",
  "Python",
];

const InfoComponent = () => (
  <p>
    Devflow is a Next.js and TypeScript-powered Web Application akin to{" "}
    <span className="italic text-orange-500/90">Stack Overflow</span>, allowing
    users to pose questions to the community. Moreover, it leverages the APIs of{" "}
    <span className="italic text-blue-500/90">OpenAI</span> and{" "}
    <span className="italic text-blue-500/90">JSearch</span> to deliver
    AI-generated answers and offers users the functionality to explore job
    opportunities.
  </p>
);

export const portfolioProjects = [
  {
    title: "DevFlow",
    info: <InfoComponent />,
    images: {
      web: ["/images/devflow-web-dark.png", "/images/devflow-web-light.png"],
      mobile: [
        "/images/devflow-tablet-dark.png",
        "/images/devflow-tablet-light.png",
        "/images/devflow-mobile-dark.png",
        "/images/devflow-mobile-light.png",
      ],
    },
    tech: ["Next.Js", "React.Js", "TypeScript", "Tailwind CSS", "MongoDb"],
    github: "https://github.com/john-bars/stack_overflow_nextjs13",
    site: "https://devflow-bars.vercel.app",
  },
  {
    title: "Portfolio Website",
    info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    // images: {
    //   web: [],
    //   mobile: [],
    // },
    tech: ["Next.Js", "React.Js", "JavaScript", "Tailwind CSS"],
    github: "https://github.com/john-bars/portfolio",
  },
];
