import React, { createContext, useRef } from "react";

export const HomeCtx = createContext<any | null>(null);

export const HomeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const whyChooseMeRef = useRef<HTMLDivElement | null>(null);
  const projectsRef = useRef<HTMLDivElement | null>(null);
  const contactRef = useRef<HTMLDivElement | null>(null);

  const scrollToSection = (ref: React.RefObject<HTMLElement>) => {
    console.log(ref.current);
    if (ref.current) {
      ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      console.log("ref is null");
    }
  };

  return (
    <HomeCtx.Provider
      value={{
        aboutRef,
        whyChooseMeRef,
        projectsRef,
        contactRef,
        scrollToSection,
      }}
    >
      {children}
    </HomeCtx.Provider>
  );
};
