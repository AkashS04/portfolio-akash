import React, { createContext, useCallback, useRef } from "react";

export const HomeCtx = createContext<any | null>(null);

export const HomeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const whyChooseMeRef = useRef<HTMLDivElement | null>(null);
  const projectsRef = useRef<HTMLDivElement | null>(null);
  const contactRef = useRef<HTMLDivElement | null>(null);

  const scrollToSection = useCallback((ref: React.RefObject<HTMLElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

    const value = React.useMemo(() => ({
    aboutRef,
    whyChooseMeRef,
    projectsRef,
    contactRef,
    scrollToSection,
  }), [])

  return (
    <HomeCtx.Provider
      value={value}
    >
      {children}
    </HomeCtx.Provider>
  );
};
