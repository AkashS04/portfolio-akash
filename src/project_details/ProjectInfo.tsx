import { Box, Typography } from "@mui/material";
import {
  projectDetails,
  projectExplaination,
  whatIbuilt,
  whatILearned,
} from "./projectDetails.ts";

function ProjectInfo() {
  return (
    <Box
      sx={{
        padding: {
          lg: "4% 8% 0 8%",
          md: "4% 6% 0 6%",
          sm: "4% 3% 0 3%",
          xs: "4% 3% 0 3%",
        },
      }}
    >
      {projectDetails.map((details: projectExplaination) => (
        <Box
          sx={{
            padding: "4% 6%",
            marginBottom: "4%",
            borderRadius: "16px",
            boxShadow: "-7px 6px 26px -5px rgba(0,0,0,0.62)",
            WebkitBoxShadow: "-7px 6px 26px -5px rgba(0,0,0,0.62)",
            MozBoxShadow: "-7px 6px 26px -5px rgba(0,0,0,0.62)",
          }}
          key={details.eId}
        >
          <Box>
            <Typography
              variant="h3"
              align="left"
              sx={{
                fontFamily: "Sora",
                fontWeight: "400",
                color: "#ffffffb3",
                fontSize: {
                  lg: "2rem",
                  md: "1.5rem",
                  sm: "1.4rem",
                  xs: "1.2rem",
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
              sx={{
                color: "#ffffffb3",
                fontFamily: "Sora",
                fontWeight: "300",
                fontSize: {
                  lg: "1.5rem",
                  md: "1.4rem",
                  sm: "1.3rem",
                  xs: "1rem",
                },
                letterSpacing: "0.5pt",
                mb: { lg: 2, md: 3, sm: 2, xs: 2 },
              }}
              align="left"
            >
              Role :{" "}
            </Typography>
            <Typography
              variant="body1"
              align="left"
              sx={{
                fontFamily: "Inter",
                fontWeight: "300",
                fontSize: {
                  lg: "1.174rem",
                  md: "1.1rem",
                  sm: "1rem",
                  xs: "0.9rem",
                },
                color: "#ffffffa8",
                letterSpacing: "0pt",
                textAlign: "justify",
                lineHeight: "1.59",
                mb: { lg: 4, md: 3, sm: 2, xs: 2 },
              }}
            >
              {" "}
              {details.projectRole}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "#ffffffb3",
                fontFamily: "Sora",
                fontWeight: "300",
                fontSize: {
                  lg: "1.4rem",
                  md: "1.3rem",
                  sm: "1.2rem",
                  xs: "1rem",
                },
                letterSpacing: "0.5pt",
                mb: { lg: 2, md: 3, sm: 2, xs: 2 },
              }}
              align="left"
            >
              Tech:
            </Typography>
            <Typography
              variant="body1"
              align="left"
              sx={{
                fontFamily: "Inter",
                fontWeight: "300",
                fontSize: {
                  lg: "1.174rem",
                  md: "1.1rem",
                  sm: "1rem",
                  xs: "0.9rem",
                },
                color: "#ffffffa8",
                letterSpacing: "0pt",
                textAlign: "justify",
                lineHeight: "1.59",
                mb: { lg: 4, md: 3, sm: 2, xs: 2 },
              }}
            >
              {details.techUsed}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "#ffffffb3",
                fontFamily: "Sora",
                fontWeight: "300",
                fontSize: {
                  lg: "1.4rem",
                  md: "1.3rem",
                  sm: "1.2rem",
                  xs: "1rem",
                },
                letterSpacing: "0.5pt",
                mb: { lg: 2, md: 3, sm: 2, xs: 2 },
              }}
              align="left"
            >
              OverView:
            </Typography>
            <Typography
              variant="body1"
              align="left"
              sx={{
                fontFamily: "Inter",
                fontWeight: "300",
                fontSize: {
                  lg: "1.174rem",
                  md: "1.1rem",
                  sm: "1rem",
                  xs: "0.9rem",
                },
                color: "#ffffffa8",
                letterSpacing: "0pt",
                textAlign: "justify",
                lineHeight: "1.59",
                mb: { lg: 4, md: 3, sm: 2, xs: 2 },
              }}
            >
              {details.projectOverView}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "#ffffffb3",
                fontFamily: "Sora",
                fontWeight: "300",
                fontSize: {
                  lg: "1.4rem",
                  md: "1.3rem",
                  sm: "1.2rem",
                  xs: "1rem",
                },
                letterSpacing: "0.5pt",
                mb: { lg: 4, md: 3, sm: 2, xs: 2 },
              }}
              align="left"
            >
              What I Built:
            </Typography>
            <Typography
              variant="body1"
              align="left"
              sx={{
                fontFamily: "Inter",
                fontWeight: "300",
                fontSize: {
                  lg: "1.174rem",
                  md: "1.1rem",
                  sm: "1rem",
                  xs: "0.9rem",
                },
                color: "#ffffffa8",
                letterSpacing: "0pt",
                textAlign: "justify",
                lineHeight: "1.59",
              }}
              gutterBottom
            >
              <ul>
                {details.whatIbuilt.map((data: whatIbuilt) => (
                  <li key={data.wId}>{data.data}</li>
                ))}
              </ul>
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: "#ffffffb3",
                fontFamily: "Sora",
                fontWeight: "300",
                fontSize: {
                  lg: "1.4rem",
                  md: "1.3rem",
                  sm: "1.2rem",
                  xs: "1rem",
                },
                letterSpacing: "0.5pt",
                mb: { lg: 4, md: 3, sm: 2, xs: 2 },
              }}
              align="left"
            >
              What I Learned:
            </Typography>
            <Typography
              variant="body1"
              align="left"
              sx={{
                fontFamily: "Inter",
                fontWeight: "300",
                fontSize: {
                  lg: "1.174rem",
                  md: "1.1rem",
                  sm: "1rem",
                  xs: "0.9rem",
                },
                color: "#ffffffa8",
                letterSpacing: "0pt",
                textAlign: "justify",
                lineHeight: "1.59",
              }}
              gutterBottom
            >
              <ul>
                {details.whatILearned.map((data: whatILearned) => (
                  <li key={data.wLId}>{data.data}</li>
                ))}
              </ul>
            </Typography>
          </Box>
        </Box>
      ))}
    </Box>
  );
}
export default ProjectInfo;
