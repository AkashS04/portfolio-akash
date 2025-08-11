import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import SkillDetails from "./SkillDetails";

const Skills = () => {
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
        }}
      >
        <Typography
          variant="h4"
          sx={{
            color: "#e3e3e3",
            paddingLeft: "2rem",
            fontFamily: "Kanit-Regular",
            fontSize: "1.5rem",
            letterSpacing:"1.8px",
            mb: { lg: 4, md: 3, sm: 2, xs: 2 }
          }}
          align="left"
        >
          Core Skills
        </Typography>
        <SkillDetails />
      </Box>
    </Box>
  );
};
export default Skills;
