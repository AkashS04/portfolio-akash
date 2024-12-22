import React, { forwardRef} from 'react';
import { Box, Typography } from "@mui/material";
import Skills from "./Skills";

const About = forwardRef<HTMLDivElement, React.PropsWithChildren<{}>>((_, ref:any) => {

  return (
    <div ref={ref}>
      <Box sx={{ width: "100%" }}>
        <Typography
          variant="h3"
          sx={{ color: "#d52e2e", fontFamily: "Poppins-Bold", mt: "1rem", fontSize:{
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
            sx={{ fontFamily: "Poppins-Regular", color: "#e3e3e3" ,fontSize:{
              lg: "2.5rem",
              md: "2rem",
              sm: "1.5rem",
              xs: "1rem"
            }, }}
            gutterBottom
          >
            Hello, I'm Akash,Front-end Developer in India.
          </Typography>
          <Typography
            variant="h5"
            align="left"
            sx={{ fontFamily: "Raleway-Extralight", color: "#e3e3e3",fontSize:{
              lg: "2rem",
              md: "1.5rem",
              sm: "1rem",
              xs: "0.9rem"
            },  }}
            gutterBottom
          >
            Having better skills with modern web technologies
          </Typography>
        </Box>
        <Skills/>
      </Box>
    </div>
  );
})
export default About;
