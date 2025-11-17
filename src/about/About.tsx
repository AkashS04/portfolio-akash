import React, { forwardRef, useContext } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Skills from "./Skills";
import { HomeCtx } from "../contexts/HomeCtx";

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
            padding: {
              lg: "1rem 4rem",
              md: "1rem 4rem",
              sm: "1rem 2rem",
              xs: "0.5rem 2rem",
            },
            mb: { lg: 5, md: 4, sm: 3, xs: 2 },
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
                lg:"1.174rem",
                md:"1.1rem",
                sm:"1rem",
                xs:"0.9rem"
              },
              color: "#e3e3e3",
              letterSpacing: "1.2px",
              textAlign: "justify",
              lineHeight:"1.59"
            }}
            gutterBottom
          >
            React Front-end Developer from India with 2+ years of experience
            building fast, scalable, and maintainable web applications. Skilled
            in React, TypeScript, Tailwind CSS, Redux, and REST APIs, with a
            strong focus on clean architecture, reusable components, and
            predictable UI behavior.
            <br />
            Work includes crafting dashboards, workflow systems, and responsive
            interfaces that balance performance with user experience. Strong
            understanding of state management, API integration, testing (Jest,
            RTL, Playwright), CI/CD, SEO, and cross-browser compatibility
            ensures that every solution is reliable in real-world environments.
            <br />
            Driven by curiosity for how systems connect and scale, paired with a
            mindset built around clarity, structure, and thoughtful design.
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
