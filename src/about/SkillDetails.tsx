import { Box } from "@mui/material";
import ProgressBar from "./ProgressBar";
const coreSkills = [
  { uID: 121, title: "HTML5", value: 85, percentage: "85%" },
  { uID: 122, title: "CSS3", value: 80, percentage: "80%" },
  { uID: 123, title: "JavaScript", value: 90, percentage: "90%" },
  { uID: 124, title: "TypeScript", value: 90, percentage: "90%" },
  { uID: 125, title: "React", value: 85, percentage: "85%" },
  { uID: 131, title: "Redux", value: 85, percentage: "85%" },
  { uID: 126, title: "Material-UI", value: 70, percentage: "70%" },
  { uID: 127, title: "Bootstrap", value: 80, percentage: "80%" },
  { uID: 132, title: "Vitest", value: 75, percentage: "75%" },
  { uID: 128, title: "REST API", value: 70, percentage: "70%" },
  { uID: 129, title: "GitHub", value: 70, percentage: "70%" },
  { uID: 130, title: "JIRA", value: 70, percentage: "70%" },
  { uID: 133, title: "Vite", value: 75, percentage: "75%" },
  { uID: 134, title: "GitHub Actions", value: 75, percentage: "75%" },
];

const SkillDetails = () => {
  return (
    <>
      {coreSkills.map((skills: any) => (
        <Box
          key={skills.uID}
          sx={{
            width: { lg: "40%", md: "40%", sm: "40%", xs: "80%" },
            display: "flex",
            flexDirection: "column",
            backgroundColor: "#48484894",
            padding: {
              lg: "1rem 2rem 3rem 2rem",
              md: "1rem 2rem 3rem 2rem",
              sm: "0.8rem 1rem 1.5rem 1rem",
              xs: "0.8rem 0.8rem 1.5rem 0.8rem",
            },
            borderRadius: "1rem",
            margin: {
              lg: "1rem",
              md: "0.8rem",
              sm: "0.7rem",
              xs: "0.5rem",
            },
          }}
        >
          <ProgressBar
            title={skills.title}
            value={skills.value}
            percentage={skills.percentage}
          />
        </Box>
      ))}
    </>
  );
};
export default SkillDetails;
