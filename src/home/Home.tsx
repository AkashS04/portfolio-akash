import React, { useRef } from "react";
import Title from "../title/Title";
import ReactNavbar from "../reactNavbar/ReactNavbar";
import Navbar from "./Navbar";
import About from "../about/About";
import WhyChooseMe from "../whyChooseMe/WhyChooseMe";
import Project from "../project_details/Project";
import Contact from "../contact/Contact";
import BackToTop from "../backtotop/BackToTop";

const Home: React.FC = () => {
  console.log("<home >component");

  const aboutRef = useRef<HTMLDivElement>(null);
  const whyChooseMeRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLElement>) => {
    console.log(ref.current);
    if (ref.current) {
      ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      console.log("ref is null");
    }
  };

  return (
    <>
      <div className="titleDiv">
        <Title />
      </div>
      <ReactNavbar
        onAboutClick={() => scrollToSection(aboutRef)}
        onWhyChooseMeClick={() => scrollToSection(whyChooseMeRef)}
        onProjectsClick={() => scrollToSection(projectsRef)}
        onContactClick={() => scrollToSection(contactRef)}
      />
      <Navbar
        onAboutClick={() => scrollToSection(aboutRef)}
        onWhyChooseMeClick={() => scrollToSection(whyChooseMeRef)}
        onProjectsClick={() => scrollToSection(projectsRef)}
        onContactClick={() => scrollToSection(contactRef)}
      />
      <About ref={aboutRef} />
      <WhyChooseMe ref={whyChooseMeRef} />
      <Project ref={projectsRef} />
      <Contact ref={contactRef} />
      <BackToTop />
    </>
  );
};
export default Home;
