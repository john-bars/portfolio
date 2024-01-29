import ActiveSectionContextProvider from "@/context/active-section-context";
import { About, Contact, Header, Projects, Skills } from "./components";

export default function Home() {
  return (
    <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:flex lg:justify-between lg:gap-4 lg:px-24 lg:py-0">
      <ActiveSectionContextProvider>
        <Header />
        <main className="gap-16 pt-24 md:gap-24 lg:flex lg:w-1/2 lg:flex-col lg:gap-36 lg:py-24">
          <About />
          <Projects />
          <Skills />
          <Contact />
        </main>
      </ActiveSectionContextProvider>
    </div>
  );
}
