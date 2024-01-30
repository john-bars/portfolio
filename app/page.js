import ActiveSectionContextProvider from "@/context/active-section-context";
import { About, Contact, Nav, Hero, Projects, Skills } from "./components";

export default function Home() {
  return (
    <div className="mx-auto min-h-screen max-w-screen-xl gap-8 scroll-smooth px-6 py-12 font-sans md:px-12 md:py-20 lg:flex lg:justify-between lg:gap-12 lg:px-24 lg:py-0">
      <ActiveSectionContextProvider>
        {/* <main className="w-full gap-16 pt-24 md:gap-24 lg:flex lg:flex-col lg:gap-36 lg:py-24"> */}
        <main className="flex w-full flex-col">
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Contact />
        </main>
        <Nav />
      </ActiveSectionContextProvider>
    </div>
  );
}
