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
import { Toaster } from "react-hot-toast";

export default function Home() {
  return (
    <ActiveSectionContextProvider>
      <Toaster position="top-center" />
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
