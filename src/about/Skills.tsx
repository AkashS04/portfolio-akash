import { Box, Typography } from "@mui/material";
import LinearProgress from "@mui/material/LinearProgress";
const Skills = () => {
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

  return (
    <Box
      sx={{
        padding: {
          lg: "0rem 4rem",
          md: "0rem 3rem",
          sm: "0rem 2rem",
          xs: "0rem 2rem",
        },
      }}
    >
      <Box
        sx={{
          padding: "1rem 0rem",
          border: "1px solid #707070",
          borderRadius: ".5rem",
        }}
      >
        <Typography
          variant="h6"
          sx={{
            color: "#e3e3e3",
            paddingLeft: "2rem",
            fontFamily: "Oswald-Medium",
            fontSize: "1.5rem",
          }}
          align="left"
        >
          {" "}
          CORE SKILLS
        </Typography>
        <Box
          sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
        >
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
              <Box>
                <Typography
                  variant="h5"
                  sx={{
                    color: "#e3e3e3",
                    fontFamily: "Oswald-Regular",
                    fontSize: {
                      lg: "1.5rem",
                      md: "1.125rem",
                      sm: "1rem",
                      xs: "1rem",
                    },
                  }}
                  align="left"
                >
                  {skills.title}
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Box sx={{ width: "100%", mr: 1}}>
                  <LinearProgress sx={{backgroundColor:"#e3e3e3"}} variant="determinate" value={skills.value} />
                </Box>
                <Box sx={{ minWidth: 35 }}>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "#e3e3e3",
                      fontFamily: "Poppins-Semibold",
                      fontSize: {
                        lg: "1.1rem",
                        md: "1rem",
                        sm: "1.2rem",
                        xs: "0.8rem",
                      },
                    }}
                  >
                    {skills.percentage}
                  </Typography>
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};
export default Skills;
