import React, { forwardRef} from 'react';
import { Box, Typography } from "@mui/material";
import Skills from "./Skills";

const About = forwardRef<HTMLDivElement, React.PropsWithChildren<{}>>((_, ref:any) => {

  return (
    <div ref={ref}>
      <Box sx={{ width: "100%" }}>
        <Typography
          variant="h3"
          sx={{ color: "#d52e2e", fontFamily: "Oswald-Bold", mt: "1rem", fontSize:{
            lg: "3rem",
            md: "2.5rem",
            sm: "2rem",
            xs: "1.5rem"
          }, }}
          gutterBottom
        >
          ABOUT
        </Typography>
        <Box sx={{padding:{lg:'1rem 4rem',md:'1rem 4rem',sm:'1rem 2rem',xs:'0.5rem 2rem'}}}>
          <Typography
            variant="h4"
            align="left"
            sx={{ fontFamily: "Kanit-Regular", color: "#e3e3e3" ,fontSize:{
              lg: "2.5rem",
              md: "2rem",
              sm: "1.5rem",
              xs: "1rem"
            }, }}
            gutterBottom
          >
          React Developer, India.
          </Typography>
          <Typography
            variant="h5"
            align="left"
            sx={{ fontFamily: "kanit-Light", color: "#e3e3e3",fontSize:{
              lg: "1.5rem",
              md: "1rem",
              sm: "0.8rem",
              xs: "0.5rem"
            },  }}
            gutterBottom
          >
           Skilled in Building Scalable and User-Centric Web Applications Crafting dynamic UIs with React.js, Javascript, Typescript, HTML, CSS.
           <br></br>Managing state with Redux & Context API and Seamless API integration using REST APIs for optimal user experiences.
          </Typography>
        </Box>
        <Skills/>
      </Box>
    </div>
  );
})
export default About;
