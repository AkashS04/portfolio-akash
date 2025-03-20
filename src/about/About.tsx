import React, { forwardRef, useContext } from "react";
import { Box, Typography } from "@mui/material";
import Skills from "./Skills";
import { HomeCtx } from "../contexts/HomeCtx";

const About = forwardRef<HTMLDivElement, React.PropsWithChildren<{}>>(
  (__) => {
    console.log("<about >component");
    const homeCtx=useContext(HomeCtx);
    const {aboutRef} = homeCtx;
  

    return (
      <>
          <Box ref={aboutRef} sx={{ width: "100%" }}>
            <Typography
              variant="h3"
              sx={{
                color: "#d52e2e",
                fontFamily: "Oswald-Bold",
                mt: "1rem",
                fontSize: {
                  lg: "3rem",
                  md: "2.6rem",
                  sm: "2.5rem",
                  xs: "2.25rem",
                },
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
              }}
            >
              <Typography
                variant="h4"
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
                }}
                gutterBottom
              >
                React Developer, India.
              </Typography>
              <Typography
                variant="h5"
                align="left"
                sx={{
                  fontFamily: "kanit-Regular",
                  color: "#e3e3e3",
                  fontSize: {
                    lg: "1.5rem",
                    md: "1.125rem",
                    sm: "1rem",
                    xs: "1rem",
                  },
                }}
                gutterBottom
              >
                Skilled in Building Scalable and User-Centric Web Applications
                Crafting dynamic UIs with React.js, Javascript, Typescript,
                HTML, CSS.
                <br></br>Managing state with Redux & Context API and Seamless
                API integration using REST APIs for optimal user experiences.
              </Typography>
            </Box>
            <Skills />
          </Box>
      </>
    );
  }
);
export default About;
