import { Box, Typography } from "@mui/material";
import LinearProgress from "@mui/material/LinearProgress";
const Skills = () => {
  const coreSkills = [
    { title: "HTML", value: "80", percentage: "80%" },
    { title: "CSS", value: "75", percentage: "75%" },
    { title: "JavaScript", value: "70", percentage: "70%" },
    { title: "TypeScript", value: "70", percentage: "70%" },
    { title: "React", value: "75", percentage: "75%" },
    { title: "Material-UI", value: "70", percentage: "70%" },
    { title: "Bootstrap", value: "80", percentage: "80%" },
    { title: "REST API", value: "70", percentage: "70%" },
    { title: "GitHub", value: "70", percentage: "70%" },
    { title: "JIRA", value: "70", percentage: "70%" },
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
          borderRadius: "1rem",
        }}
      >
        <Typography
          variant="h6"
          sx={{
            color: "#e3e3e3",
            paddingLeft: "2rem",
            fontFamily: "Poppins-Medium",
            fontSize: "1.1rem",
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
                    fontFamily: "Raleway-Regular",
                    fontSize: {
                      lg: "1.5rem",
                      md: "1rem",
                      sm: "0.8rem",
                      xs: "0.8rem",
                    },
                  }}
                  align="left"
                >
                  {skills.title}
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Box sx={{ width: "100%", mr: 1 }}>
                  <LinearProgress variant="determinate" value={skills.value} />
                </Box>
                <Box sx={{ minWidth: 35 }}>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "#d52e2e",
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
