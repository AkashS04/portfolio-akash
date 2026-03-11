import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import NewSkillDetails from "./newSkillDetails";

const Skills = () => {
  return (
    <Box
      sx={{
        padding: {
          lg: "0% 8% 8% 8%",
          md: "0% 6% 8% 6%",
          sm: "0% 3% 8% 3%",
          xs: "0% 3% 8% 3%",
        },
      }}
    >
      <Box
        sx={{
          backgroundColor: "#0000003b",
          padding: "2rem 0rem 1rem 0rem",
          borderRadius: "16px",
          boxShadow: "-7px 6px 26px -5px rgba(0,0,0,0.62)",
          WebkitBoxShadow: "-7px 6px 26px -5px rgba(0,0,0,0.62)",
          MozBoxShadow: "-7px 6px 26px -5px rgba(0,0,0,0.62)",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            color: "#d9d7da",
            paddingLeft: "2rem",
            fontFamily: "Sora",
            fontWeight: "400",
            fontSize: {
              lg: "2rem",
              md: "1.8rem",
              sm: "1.6rem",
              xs: "1.5rem",
            },
            letterSpacing: "1pt",
            mb: { lg: 4, md: 3, sm: 2, xs: 2 },
          }}
          align="left"
        >
          Core Skills
        </Typography>
        <NewSkillDetails />
      </Box>
    </Box>
  );
};
export default Skills;
