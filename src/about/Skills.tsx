import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import NewSkillDetails from "./newSkillDetails";

const Skills = () => {
  return (
    <Box
      sx={{
        padding: "0% 8% 8% 8% ",
      }}
    >
      <Box
        sx={{
          backgroundColor: "#0000003b",
          padding: "2rem 0rem 1rem 0rem",
          borderRadius: "16px",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            color: "#d52e2e",
            paddingLeft: "2rem",
            fontFamily: "Kanit-Regular",
            fontSize: {
              lg: "2rem",
              md: "1.8rem",
              sm: "1.6rem",
              xs: "1.5rem",
            },
            letterSpacing: "1.8px",
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
