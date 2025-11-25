import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import SkillDetails from "./SkillDetails";

const Skills = () => {
  return (
    <Box
      sx={{
        // padding: {
        //   lg: "0rem 4rem",
        //   md: "0rem 3rem",
        //   sm: "0rem 2rem",
        //   xs: "0rem 2rem",
        // },
        padding: "0% 8% 8% 8% ",
        
      }}
    >
      <Box
        sx={{
          backgroundColor: "#0000003b",
          padding: "2rem 0rem 1rem 0rem",
          borderRadius:"16px"
        }}
      >
        <Typography
          variant="h4"
          sx={{
            color: "#e3e3e3",
            paddingLeft: "2rem",
            fontFamily: "Kanit-Regular",
            fontSize: "1.5rem",
            letterSpacing: "1.8px",
            mb: { lg: 4, md: 3, sm: 2, xs: 2 },
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
