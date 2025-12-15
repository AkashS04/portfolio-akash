import { Box, Typography } from "@mui/material";
import {
  projectDetails,
  projectExplaination,
  whatIbuilt,
  whatILearned,
} from "./projectDetails.ts";

function ProjectInfo() {
  return (
    <>
      {projectDetails.map((details: projectExplaination) => (
        <Box
          sx={{
            padding: "8% 8% 0 8%",
          }}
          key={details.eId}
        >
          <Typography
            variant="h3"
            align="left"
            sx={{
              fontFamily: "Kanit-Regular",
              color: "#e6e6e6",
              fontSize: {
                lg: "2rem",
                md: "1.5rem",
                sm: "1.4rem",
                xs: "1.2rem",
              },
              letterSpacing: "1.8px",
              mb: { lg: 5, md: 4, sm: 3, xs: 3 },
            }}
            gutterBottom
          >
            {details.projectName}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "#e3e3e3",
              fontFamily: "Kanit-Regular",
              fontSize: {
                lg: "1.5rem",
                md: "1.4rem",
                sm: "1.3rem",
                xs: "1rem",
              },
              letterSpacing: "1.8px",
              mb: { lg: 2, md: 3, sm: 2, xs: 2 },
            }}
            align="left"
          >
            Role : {details.projectRole}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "#e3e3e3",
              fontFamily: "Kanit-Regular",
              fontSize: {
                lg: "1.4rem",
                md: "1.3rem",
                sm: "1.2rem",
                xs: "1rem",
              },
              letterSpacing: "1.8px",
              mb: { lg: 2, md: 3, sm: 2, xs: 2 },
            }}
            align="left"
          >
            Tech: {details.techUsed}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "#e3e3e3",
              fontFamily: "Kanit-Regular",
              fontSize: {
                lg: "1.4rem",
                md: "1.3rem",
                sm: "1.2rem",
                xs: "1rem",
              },
              letterSpacing: "1.8px",
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
              fontFamily: "Kanit-Light",
              fontSize: {
                lg: "1.174rem",
                md: "1.1rem",
                sm: "1rem",
                xs: "0.9rem",
              },
              color: "#e3e3e3",
              letterSpacing: "1.2px",
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
              color: "#e3e3e3",
              fontFamily: "Kanit-Regular",
              fontSize: {
                lg: "1.4rem",
                md: "1.3rem",
                sm: "1.2rem",
                xs: "1rem",
              },
              letterSpacing: "1.8px",
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
              fontFamily: "Kanit-Light",
              fontSize: {
                lg: "1.174rem",
                md: "1.1rem",
                sm: "1rem",
                xs: "0.9rem",
              },
              color: "#e3e3e3",
              letterSpacing: "1.2px",
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
              color: "#e3e3e3",
              fontFamily: "Kanit-Regular",
              fontSize: {
                lg: "1.4rem",
                md: "1.3rem",
                sm: "1.2rem",
                xs: "1rem",
              },
              letterSpacing: "1.8px",
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
              fontFamily: "Kanit-Light",
              fontSize: {
                lg: "1.174rem",
                md: "1.1rem",
                sm: "1rem",
                xs: "0.9rem",
              },
              color: "#e3e3e3",
              letterSpacing: "1.2px",
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
      ))}
    </>
  );
}
export default ProjectInfo;
