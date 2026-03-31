import React, { forwardRef, memo, useContext } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { HomeCtx } from "../contexts/HomeCtx";
import Skills from "./Skills";
import Framer from "../framer/Framer";

const About = memo( forwardRef<HTMLDivElement, React.PropsWithChildren<{}>>((__) => {
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
        }}
        className="about-linear"
        
      >
        <Framer>
        <Typography
          variant="h2"
          sx={{
            color: "#ffffff",
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
        </Framer>
        <Framer>

        <Box
          sx={{
            padding: { lg: "6% 8%", md: "6% 6%", sm: "6% 4%", xs: "6% 4%" },
          }}
        >
          <Typography
            variant="h3"
            align="left"
            sx={{
              fontFamily: "Sora",
              fontWeight: "400",
              color: "#e8e8e8 ",
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
              fontWeight: "300",
              fontSize: "16px",
              color: " #c7c7c7",
              textAlign: "justify",
              lineHeight: "1.5",
            }}
            gutterBottom
          >
            React Frontend Developer with 2+ years of experience building fast,
            scalable, and maintainable web applications.
            <br />
            Focused on scalable frontend architecture, clean component design,
            and predictable UI systems, with strong hands-on experience with
            React, TypeScript, Tailwind CSS, Redux Toolkit, and REST API
            integration.
            <br />
            Started my career as an Angular Developer at Ieyal Solutions,
            contributing to e-commerce platforms and dynamic web applications.
            Later transitioned to React.js at Satvat Infosol, where I designed
            and Implemented Feature-based modular Architecture, along with API
            integration, and performance optimization, strengthening my
            foundation in modern frontend engineering.
            <br />
            I have built dashboards and workflow-based applications with a
            strong focus on performance and user experience. I work extensively
            with state management, and testing tools such as Jest, React Testing
            Library and Playwright, and have practical experience with CI/CD,
            SEO, and cross-browser compatibility.
            <br />
            <br />
            Technical Focus Includes:
            <ul>
              <li>Feature-based architecture</li>
              <li>Reusable component systems </li>
              <li>Predictable state management</li>
              <li>Performance optimization </li>
              <li>Maintainable and clean codebases </li>
            </ul>
            Currently seeking a React Frontend Developer role to contribute to
            well-engineered and scalable web applications.
          </Typography>
        </Box>
        </Framer>
        <Framer>
        <Skills />
        </Framer>
      </Box>
    </>
  );
})
)
export default About;
