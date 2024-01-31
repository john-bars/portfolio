import ActiveSectionContextProvider from "@/context/active-section-context";
import {
  About,
  Contact,
  Nav,
  Hero,
  Projects,
  Skills,
  Logo,
  MobileNav,
} from "./components";

export default function Home() {
  return (
    <div className="main-div">
      <ActiveSectionContextProvider>
        <main className="custom-scrollbar h-screen snap-y snap-mandatory flex-col overflow-y-scroll scroll-smooth">
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Contact />
        </main>
        <Logo />
        <MobileNav />
        <Nav />
      </ActiveSectionContextProvider>
    </div>
  );
}
