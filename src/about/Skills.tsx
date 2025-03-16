import { Box, Typography } from "@mui/material";
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
          CORE SKILLS
        </Typography>
        <Box
          sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
        >
          <SkillDetails />
        </Box>
      </Box>
    </Box>
  );
};
export default Skills;
