import React, { forwardRef, useContext } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { HomeCtx } from "../contexts/HomeCtx";
import ProjectInfo from "./ProjectInfo";
import ProjectCard from "./ProjectCard";
import Framer from "../framer/Framer";

const Project = forwardRef<HTMLDivElement, React.PropsWithChildren<{}>>(
  (__) => {
    console.log("<Project >component");
    const homeCtx = useContext(HomeCtx);
    const { projectsRef } = homeCtx;

    return (
      <>
        <div ref={projectsRef} >
          <Box className="projects-linear">
            <Framer>
            <Typography
              variant="h3"
              sx={{
                color: "#ffffff",
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
            </Framer>
            <ProjectInfo />
            <ProjectCard />
          </Box>
        </div>
      </>
    );
  }
);
export default Project;
