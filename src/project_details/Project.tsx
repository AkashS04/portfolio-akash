import React, { forwardRef } from "react";
import { Box, Typography } from "@mui/material";
import ProjectCard from "./ProjectCard";

const Project = forwardRef<HTMLDivElement, React.PropsWithChildren<{}>>(
  (_, ref: any) => {
    console.log("<project >component");

    return (
      <>
        <div ref={ref}>
          <Box>
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
