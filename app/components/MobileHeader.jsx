"use client";
import { useActiveSectionContext } from "@/context/active-section-context";
import { links } from "@/lib/data";
import Link from "next/link";

const MobileHeader = () => {
  const { activeSection, setActiveSection } = useActiveSectionContext();

  return (
    <header className="scrool:mt-16 sticky top-0 flex w-full flex-row justify-between bg-slate-800 lg:hidden">
      <nav className="">
        <ul className="">
          {links.map((link) => (
            <li key={link.hash}>
              <nav>
                <Link
                  //   layoutId="activeSection"
                  href={link.hash}
                  onClick={() => setActiveSection(link.name)}
                  className={`${activeSection !== link.name && "hidden"}`}
                >
                  {link.name}
                </Link>
              </nav>
            </li>
          ))}
        </ul>
      </nav>
      <h1>bars.</h1>
    </header>
  );
};

export default MobileHeader;
