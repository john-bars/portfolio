import ActiveSectionContextProvider from "@/context/active-section-context";
import {
  About,
  Contact,
  Nav,
  Projects,
  Skills,
  Logo,
  Socials,
  Intro,
} from "../components";

export default function Home() {
  return (
    <ActiveSectionContextProvider>
      <Logo />
      <Nav />
      <Socials />
      <main className="main-div">
        <Intro />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </ActiveSectionContextProvider>
  );
}
