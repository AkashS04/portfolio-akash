import React, { forwardRef, useContext } from "react";
import { Box, Typography } from "@mui/material";
import Skills from "./Skills";
import { HomeCtx } from "../contexts/HomeCtx";

const About = forwardRef<HTMLDivElement, React.PropsWithChildren<{}>>((__) => {
  console.log("<about >component");
  const homeCtx = useContext(HomeCtx);
  const { aboutRef } = homeCtx;

  return (
    <>
      <Box ref={aboutRef} sx={{ width: "100%",mt:{lg:8,md:6,sm:4 ,xs:3},mb:{lg:8,md:6,sm:4 ,xs:3} }}>
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
            letterSpacing: "4px"
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
            mb: { lg: 5, md: 4, sm: 3, xs: 2 }
          }}
        >
          <Typography
            variant="h3"
            align="left"
            sx={{
              fontFamily: "Kanit-Regular",
              color: "#00d8ff",
              fontSize: {
                lg: "2.5rem",
                md: "2rem",
                sm: "1.5rem",
                xs: "1.5rem",
              },
              letterSpacing: "1.8px",
              mb: { lg: 5, md: 4, sm: 3, xs: 3 }
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
              color: "#e3e3e3",
              letterSpacing: "1.2px",
            }}
            gutterBottom
          >

            Hi, I’m Akash — a React front-end developer with 2+ years of
            experience building clean, scalable, and responsive web applications
            using React, TypeScript, Tailwind, and Redux.
            <br />I believe in clarity — in design, in code, and in
            communication. My curiosity goes beyond tech — I explore systems,
            structures, and even the deeper roots of the Tamil language and
            logic.
            <br />
            From dynamic dashboards to e-commerce platforms, I focus on creating
            interfaces that are not just functional, but thoughtful. I value
            discipline, minimalism, and user-first development.
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
