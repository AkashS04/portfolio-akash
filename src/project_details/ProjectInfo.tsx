import { Box, Typography } from "@mui/material";
import {
  projectDetails,
  projectExplaination,
  techUsed,
  whatIbuilt,
} from "./projectDetails.ts";
import TechBatch from "./TechBatch.tsx";
import Framer from "../framer/Framer.tsx";

function ProjectInfo() {
  return (
    <Box
      sx={{
        padding: {
          lg: "4% 8% 0 8%",
          md: "4% 6% 0 6%",
          sm: "4% 4% 0 4%",
          xs: "4% 4% 0 4%",
        },
      }}
    >
      {projectDetails.map((details: projectExplaination) => (
        <Framer>
          <Box
            sx={{
              padding: {md:"4% 6%", xs:"6% 6%"},
              marginBottom: "4%",
              borderRadius: "16px",
              backdropFilter: "blur(8px)",
              background: "rgba(255,255,255,0.08)",
              boxShadow: "rgb(0 0 0 / 24%) -2px 2px 12px -3px",
              WebkitBoxShadow: "rgb(0 0 0 / 24%) -2px 2px 12px -3px",
              MozBoxShadow: "rgb(0 0 0 / 24%) -2px 2px 12px -3px",
            }}
            key={details.eId}
          >
            <Box>
              <Typography
                variant="h3"
                align="left"
                sx={{
                  fontFamily: 'Bebas Neue',
                  fontWeight: "400",
                  color: "#e8e8e8 ",
                  fontSize: {
                    md: "2.5rem",
                    sm: "2.2rem",
                    xs: "2rem",
                  },
                  letterSpacing: "1.0pt",
                  mb: { lg: 5, md: 4, sm: 3, xs: 3 },
                }}
                gutterBottom
              >
                {details.projectName}
              </Typography>
                   <Typography
                variant="body1"
                align="left"
                sx={{
                  fontFamily: "Inter",
                  fontWeight: "300",
                  fontSize: "16px",
                  color: " #c7c7c7",
                  letterSpacing: "0pt",
                  textAlign: "justify",
                  lineHeight: "1.59",
                  mb: { lg: 4, md: 3, sm: 2, xs: 2 },
                }}
              >
                {details.projectOverView}
              </Typography>
              <Box sx={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                {details.techUsed.map((data: techUsed) => (
                  <TechBatch key={data.tId} data={data.techName} />
                ))}
              </Box>
              <Typography
                variant="body1"
                align="left"
                sx={{
                  fontFamily: "Inter",
                  fontWeight: "300",
                  fontSize: "16px",
                  color: " #c7c7c7",
                  letterSpacing: "0pt",
                  textAlign: "justify",
                  lineHeight: "1.59",
                  margin:0
                }}
                gutterBottom
              >
                  {details.whatIbuilt.map((data: whatIbuilt) => (
                    <p key={data.wId}>{data.data}</p>
                  ))}
              </Typography>
            </Box>
          </Box>
        </Framer>
      ))}
    </Box>
  );
}
export default ProjectInfo;
