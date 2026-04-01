import { Box, Typography } from "@mui/material";
import { techStacks, techStacksType, stacks } from "./newSkillsData";
import TechPill from "../TechPill";

const TechStacks = () => {
  return (
    <>
    <Box className="main-deiv-skills" sx={{ display: "flex", justifyContent: "space-between"}}>
      {techStacks.map((tech: techStacksType) => (
        <Box sx={{padding:"0px 16px" }} key={tech.tId}>
          <Box>
            <Typography
              variant="body1"
              sx={{
                color: "#d4d4d4",
                fontFamily: "Sora",
                fontWeight: "300",
                fontSize: {
                  lg: "1.5rem",
                  md: "1.4rem",
                  sm: "1.3rem",
                  xs: "1.2rem",
                },
                letterSpacing: "0.5pt",
                mb: { lg: 4, md: 3, sm: 2, xs: 2 },
                textAlign:"left"
              }}
             
            >
              {tech.type}
            </Typography>
          </Box>
          <Box sx={{display:"flex",
            flexWrap:"wrap",
            gap:"8px"
          }}>
            {tech.stacks.map((stack: stacks) => (
              <Box key={stack.stId} sx={{marginBottom:"20px"}}>
                <TechPill color={tech.color} skill={stack.skill} />
              </Box>
            ))}
          </Box>
        </Box>
      ))}
        </Box>

    </>
  );
};
export default TechStacks;
