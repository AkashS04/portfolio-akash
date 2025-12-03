import React, { forwardRef, useContext } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { HomeCtx } from "../contexts/HomeCtx";
import Skills from "./Skills";

const About = forwardRef<HTMLDivElement, React.PropsWithChildren<{}>>((__) => {
  console.log("<about >component");
  const homeCtx = useContext(HomeCtx);
  const { aboutRef } = homeCtx;

  return (
    <>
      <Box
        ref={aboutRef}
        sx={{
          width: "100%",
          mt: { lg: 8, md: 6, sm: 4, xs: 3 },
          mb: { lg: 8, md: 6, sm: 4, xs: 3 },
        }}
      >
        <Typography
          variant="h2"
          sx={{
            color: "#d52e2e",
            fontFamily: "Oswald-Bold",
            fontSize: {
              lg: "3rem",
              md: "2.6rem",
              sm: "2.5rem",
              xs: "2.25rem",
            },
            letterSpacing: "4px",
          }}
          gutterBottom
        >
          ABOUT
        </Typography>
        <Box
          sx={{
            padding: "8% ",
          }}
        >
          <Typography
            variant="h3"
            align="left"
            sx={{
              fontFamily: "Kanit-Regular",
              color: "#e6e6e6",
              fontSize: {
                lg: "2.5rem",
                md: "2rem",
                sm: "1.5rem",
                xs: "1.5rem",
              },
              letterSpacing: "1.8px",
              mb: { lg: 5, md: 4, sm: 3, xs: 3 },
            }}
            gutterBottom
          >
            React Developer, India.
          </Typography>
          <Typography
            variant="body1"
            align="left"
            sx={{
              fontFamily: "Kanit-Light",
              fontSize: {
                lg: "1.174rem",
                md: "1.1rem",
                sm: "1rem",
                xs: "0.9rem",
              },
              color: "#e3e3e3",
              letterSpacing: "1.2px",
              textAlign: "justify",
              lineHeight: "1.59",
            }}
            gutterBottom
          >
            2+ years of experience in building fast, scalable, and maintainable
            web applications. Skilled in React, TypeScript, Tailwind CSS, Redux,
            and REST APIs, with a strong focus on clean architecture, reusable
            components, and predictable UI behavior.
            <br />
            I started my career as an Angular Developer at Ieyal Solutions,
            working on e-commerce and dynamic web apps. Later, I transitioned to
            React.js at Satvat Infosol, where I focused on component-driven UI,
            API integration, and performance improvements—strengthening my
            foundation in modern front-end development.
            <br />
            Work includes crafting dashboards, workflow systems, and responsive
            interfaces that balance performance with user experience. Strong
            understanding of state management, API integration, testing (Jest,
            RTL, Playwright), CI/CD, SEO, and cross-browser compatibility
            ensures that every solution is reliable in real-world environments.
            <br />
            <br />
            After leaving my job, I spent 8+ months upskilling full-time in:
            <br />
            <ul>
              <li>
                React (advanced hooks, state management, context architecture)
              </li>
              <li>Redux Toolkit / Thunk</li>
              <li>TypeScript</li>
              <li>Tailwind CSS</li>
              <li>Jest / React Testing Library</li>
              <li>REST APIs & Axios</li>
              <li>Playwright (E2E)</li>
              <li>SEO, performance optimization</li>
              <li>CI/CD basics</li>
            </ul>
            I’m passionate about crafting intuitive interfaces, improving user
            experience, and writing code that is easy to read, extend, and
            maintain. And I’m now looking for a React Front-End Developer role
            where I can contribute, collaborate, and build meaningful products.
            <br />
            Let’s build something meaningful — together.
          </Typography>
        </Box>
        <Skills />
      </Box>
    </>
  );
});
export default About;
