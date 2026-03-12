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
          pt: { lg: 8, md: 6, sm: 4, xs: 3 },
          // pb: { lg: 8, md: 6, sm: 4, xs: 3 },
      background: "linear-gradient(81deg, #000000 0%, #2e003e 35%, #4b0082 60%, #0000ff 85%)",

        }}
      >
        <Typography
          variant="h2"
          sx={{
            color: "#d9d7da",
            fontFamily: "Oswald-Bold",
            fontSize: {
              lg: "3rem",
              md: "2.6rem",
              sm: "2.5rem",
              xs: "2.25rem",
            },
            letterSpacing: "1pt",
          }}
          gutterBottom
        >
          ABOUT
        </Typography>
        <Box
          sx={{
            padding: { lg: "6% 8%", md: "6% 6%", sm: "6% 3%", xs: "6% 3%" },
          }}
        >
          <Typography
            variant="h3"
            align="left"
            sx={{
              fontFamily: "Sora",
              fontWeight:"400",
              color: "#ffffffb3",
              fontSize: {
                lg: "2.5rem",
                md: "2rem",
                sm: "1.5rem",
                xs: "1.5rem",
              },
              letterSpacing: "0.25pt",
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
              fontFamily: "Inter",
              fontWeight:"300",
              fontSize: {
                lg: "1rem",
                md: "0.8rem",
                sm: "1rem",
                xs: "0.9rem",
              },
              color: "#ffffffa8",
              letterSpacing: "0.3pt",
              wordSpacing:"6px",
              textAlign: "justify",
              lineHeight: "1.59",
            }}
            gutterBottom
          >
            Frontend Engineer with 2+ years of experience building fast,
            scalable, and maintainable web applications.
            <br />
            Focused on scalable frontend architecture, clean component design,
            and predictable UI systems. Strong hands-on experience with React,
            TypeScript, Tailwind CSS, Redux Toolkit, and REST API integration.
            <br />
            Started my career as an Angular Developer at Ieyal Solutions,
            contributing to e-commerce platforms and dynamic web applications.
            Later transitioned to React.js at Satvat Infosol, where I worked on
            component-driven interfaces, API integration, and performance
            optimization, strengthening my foundation in modern frontend
            engineering.
            <br />
            Experience includes developing dashboards, workflow systems, and
            responsive interfaces that balance performance with usability.
            Strong understanding of state management, testing strategies (Jest,
            React Testing Library, Playwright), CI/CD basics, SEO, and
            cross-browser compatibility.
            <br />
            <br />
            Technical Focus:
            <ul>
              <li>Scalable frontend architecture</li>
              <li>Reusable component systems </li>
              <li>Predictable state management</li>
              <li>Performance optimization </li>
              <li>Maintainable and clean codebases </li>
            </ul>
            <br />
            Technologies:
            <ul>
              <li>React</li>
              <li>TypeScript </li>
              <li>Redux Toolkit</li>
              <li>Tailwind CSS </li>
              <li>REST APIs </li>
              <li>Axios</li>
              <li>Jest </li>
              <li>React Testing Library</li>
              <li>Playwright </li>
              <li>CI/CD</li>
              <li>SEO </li>
              <li>Performance Optimization</li>
            </ul>
            Passionate about building intuitive user interfaces, improving user
            experience, and creating maintainable frontend systems that scale
            with real-world products.
            <br />
            Currently seeking a React Frontend Developer role to contribute to
            impactful and well-engineered web applications.
          </Typography>
        </Box>
        <Skills />
      </Box>
    </>
  );
});
export default About;
