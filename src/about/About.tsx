import React, { forwardRef, memo, useContext } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { HomeCtx } from "../contexts/HomeCtx";
import Skills from "./Skills";
import Framer from "../framer/Framer";

const About = memo(
  forwardRef<HTMLDivElement, React.PropsWithChildren<{}>>((__) => {
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
              <Box
                className=""
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  mb: { lg: 5, md: 4, sm: 3, xs: 3 },
                  flexWrap:"wrap"
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
                  }}
                  gutterBottom
                >
                  React Developer,{" "}
                  <span style={{ color: "#ff0000" }}>India.</span>
                </Typography>
                <div className="exp-pills">
                  <div className="exp-pill">
                    <h4> 2 +</h4>
                    <p>yrs exp</p>
                  </div>
                  <div className="exp-pill">
                    <h4>15+</h4>
                    <p>projects</p>
                  </div>
                </div>
              </Box>
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
                  borderLeft: {lg:"4px solid #ff0000" ,sm:"none"},
                  paddingLeft:"12px"
                }}
                gutterBottom
              >
               Frontend dev focused on scalable architecture, clean component design, and predictable UI systems — with strong hands-on experience in React, TypeScript, and Tailwind CSS.
                <br />
                Technical Focus Includes:
                <ul>
                  <li>Feature-based architecture</li>
                  <li>Reusable component systems </li>
                  <li>Predictable state management</li>
                  <li>Performance optimization </li>
                  <li>Maintainable and clean codebases </li>
                </ul>
                Currently seeking a React Frontend Developer role to contribute
                to well-engineered and scalable web applications.
              </Typography>
            </Box>
          </Framer>
          <Framer>
            <Skills />
          </Framer>
        </Box>
      </>
    );
  }),
);
export default About;
