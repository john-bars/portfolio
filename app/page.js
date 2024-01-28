import { About, Contact, Header, Projects, Skills } from "./components";

export default function Home() {
  return (
    <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:flex lg:justify-between lg:gap-4 lg:px-24 lg:py-0">
      <Header />
      <main className="custom-scrollbar overflow-y-auto pt-24 lg:max-h-screen lg:w-1/2 lg:py-24">
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </div>
  );
}
