import React, { forwardRef, useContext } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { HomeCtx } from "../contexts/HomeCtx";
import ProjectInfo from "./ProjectInfo";
import ProjectCard from "./ProjectCard";

const Project = forwardRef<HTMLDivElement, React.PropsWithChildren<{}>>(
  (__) => {
    console.log("<Project >component");
    const homeCtx = useContext(HomeCtx);
    const { projectsRef } = homeCtx;

    return (
      <>
        <div ref={projectsRef} >
          <Box sx={{ background:" linear-gradient(82deg, #000000 0%, #2e003e 35%, #4b0082 60%, #0000ff 85%)"}}>
            <Typography
              variant="h3"
              sx={{
                color: "#d9d7da",
                fontFamily: "Oswald-Bold",
                fontSize: {
                  lg: "3rem",
                  md: "2.6rem",
                  sm: "2.5rem",
                  xs: "2.25rem",
                },
                pt: { lg: 8, md: 6, sm: 4, xs: 3 },
                pb: { lg: 8, md: 6, sm: 4, xs: 4 },
                letterSpacing: "1.0pt",
              }}
              gutterBottom
            >
              PROJECTS
            </Typography>
            <ProjectInfo />
            <ProjectCard />
          </Box>
        </div>
      </>
    );
  }
);
export default Project;
