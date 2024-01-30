"use client";

import { createContext, useContext, useState } from "react";

// Create a context to manage the active section state
export const ActiveSectionContext = createContext(null);

// A provider component for the ActiveSectionContext
export default function ActiveSectionContextProvider({ children }) {
  const [activeSection, setActiveSection] = useState("");

  return (
    <ActiveSectionContext.Provider value={{ activeSection, setActiveSection }}>
      {children}
    </ActiveSectionContext.Provider>
  );
}

// A custom hook to easily access the active section context
export const useActiveSectionContext = () => {
  const context = useContext(ActiveSectionContext);
  if (context === null) {
    throw new Error(
      "useActiveSectionContext must be used within an ActiveSectionContextProvider."
    );
  }
  return context;
};
