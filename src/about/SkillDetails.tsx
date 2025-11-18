import Box from "@mui/material/Box";
import ProgressBar from "./ProgressBar";
const coreSkills = [
  { uID: 125, title: "React", value: 85, percentage: "85%" },
  { uID: 131, title: "Redux", value: 85, percentage: "85%" },
  { uID: 124, title: "TypeScript", value: 90, percentage: "90%" },
  { uID: 135, title: "Tailwind CSS", value: 85, percentage: "85%" },
  { uID: 132, title: "Vitest", value: 75, percentage: "75%" },
  { uID: 128, title: "REST API", value: 70, percentage: "70%" },
  { uID: 129, title: "GitHub", value: 70, percentage: "70%" },
  { uID: 133, title: "Vite", value: 75, percentage: "75%" },
  { uID: 121, title: "HTML5", value: 85, percentage: "85%" },
  { uID: 122, title: "CSS3", value: 80, percentage: "80%" },
  { uID: 123, title: "JavaScript", value: 90, percentage: "90%" },
  { uID: 126, title: "Material-UI", value: 70, percentage: "70%" },
  { uID: 127, title: "Bootstrap", value: 80, percentage: "80%" },
  { uID: 130, title: "JIRA", value: 70, percentage: "70%" },
  { uID: 134, title: "GitHub Actions", value: 75, percentage: "75%" },
];

const SkillDetails = () => {
  return (
    <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
      {coreSkills.map((skills: any) => (
        <Box
          key={skills.uID}
          sx={{
            backgroundColor: "#48484894",
            padding: "16px",
            borderRadius: "8px",
            margin: "16px",
            width:"40%"
          }}
          className="skill-box"
        >
          <ProgressBar
            title={skills.title}
            value={skills.value}
            percentage={skills.percentage}
          />
        </Box>
      ))}
    </Box>
  );
};
export default SkillDetails;
