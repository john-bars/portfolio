"use client";

import { createContext, useContext, useState } from "react";

export const ActiveSectionContext = createContext(null);

export default function ActiveSectionContextProvider({ children }) {
  const [activeSection, setActiveSection] = useState("#about");
  const [timeOfLastClick, setTimeOfLastClick] = useState(0);
  return (
    <ActiveSectionContext.Provider
      value={{
        activeSection,
        setActiveSection,
        timeOfLastClick,
        setTimeOfLastClick,
      }}
    >
      {children}
    </ActiveSectionContext.Provider>
  );
}

export const useActiveSectionContext = () => {
  const context = useContext(ActiveSectionContext);
  if (context === null) {
    throw new Error(
      "useActiveSectionContext must be used within an ActiveSectionContextProvider"
    );
  }
  return context;
};
