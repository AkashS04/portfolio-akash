import React, { forwardRef, useContext} from "react";
import { Box, Typography } from "@mui/material";
import ProjectCard from "./ProjectCard";
import { HomeCtx } from "../contexts/HomeCtx";

const Project = forwardRef<HTMLDivElement, React.PropsWithChildren<{}>>(
  (__) => {
    console.log("<Project >component");
    const homeCtx=useContext(HomeCtx)
    const {projectsRef}=homeCtx


    return (
      <>
        <div ref={projectsRef}>
          <Box>
            <Typography
              variant="h3"
              sx={{
                color: "#d52e2e",
                fontFamily: "Oswald-Bold",
                fontSize: {
                  lg: "3rem",
                  md: "2.6rem",
                  sm: "2.5rem",
                  xs: "2.25rem",
                },
                mt:{lg:8,md:6,sm:4 ,xs:3},mb:{lg:8,md:6,sm:4 ,xs:3},
                letterSpacing: "4px"
              }}
              gutterBottom
            >
              PROJECTS
            </Typography>
            <ProjectCard />
          </Box>
        </div>
      </>
    );
  }
);
export default Project;
