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

const DevFlowInfo = () => (
  <p className="text-justify">
    Devflow is a Next.js and TypeScript-powered Web Application akin to{" "}
    <span className="italic text-orange-500/90">Stack Overflow</span>, allowing
    users to pose questions to the community. Moreover, it leverages the APIs of{" "}
    <span className="italic text-blue-500/90">OpenAI</span> and{" "}
    <span className="italic text-blue-500/90">JSearch</span> to deliver
    AI-generated answers and offers users the functionality to explore job
    opportunities.
  </p>
);

const PortfolioInfo = () => (
  <p className="text-justify">
    This is my present portfolio website built using{" "}
    <span className="italic text-blue-500/90">Next.js</span>,{" "}
    <span className="italic text-blue-500/90">Tailwind CSS</span> and{" "}
    <span className="italic text-blue-500/90">React</span>. It&apos;s a simple
    single-page web app that showcase my knowledge in web development using
    these technologies. During the development of this website, I also learn
    more about <span className="italic text-orange-500/90">React Context</span>,
    enhancing my understanding of{" "}
    <span className="italic text-blue-500/90">state management</span>. I
    utilized it to dynamically adjust the style across the navbar associated
    with each section of the page. Furthermore, I ensured optimal performance
    across webpages, mobile, and tablet devices.
  </p>
);

export const portfolioProjects = [
  {
    title: "DevFlow",
    info: <DevFlowInfo />,
    images: {
      web: ["/images/devflow-web-dark.png", "/images/devflow-web-light.png"],
      mobile: [
        "/images/devflow-tablet-dark.png",
        "/images/devflow-tablet-light.png",
        "/images/devflow-mobile-dark.png",
        "/images/devflow-mobile-light.png",
      ],
    },
    tech: [
      "Next.Js",
      "React.Js",
      "TypeScript",
      "Tailwind CSS",
      "MongoDb",
      "Clerk",
      "shadcn",
    ],
    github: "https://github.com/john-bars/stack_overflow_nextjs13",
    site: "https://devflow-bars.vercel.app",
  },
  {
    title: "Portfolio Website",
    info: <PortfolioInfo />,
    images: {
      web: ["/images/portfolio-web.png"],
      mobile: [
        "/images/portfolio-mobile.png",
        "/images/portfolio-mobile2.png",
        "/images/portfolio-tablet.png",
      ],
    },
    tech: ["Next.Js", "React", "JavaScript", "Tailwind CSS"],
    github: "https://github.com/john-bars/portfolio",
  },
];
