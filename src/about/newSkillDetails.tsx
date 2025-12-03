import { Box, Typography } from "@mui/material";
import ProgressBar from "./ProgressBar";
import { newSkillsData, skillLevels, skillValues } from "./newSkillsData";

const NewSkillDetails = () => {
  return (
      <Box className="main-deiv-skills" sx={{ display: "flex", justifyContent: "space-between"}}>
        {newSkillsData.map((skillLevels: skillLevels) => (
          <Box
           sx={{width:"100%"}}
            key={skillLevels.typeID}
          >
            <Box>
              <Typography
                variant="body1"
                sx={{
                  color: "#e3e3e3",
                  fontFamily: "Kanit-Regular",
                  fontSize: {
                    lg: "1.5rem",
                    md: "1.4rem",
                    sm: "1.3rem",
                    xs: "1.2rem",
                  },
                  letterSpacing: "1.8px",
                  mb: { lg: 4, md: 3, sm: 2, xs: 2 },
                }}
                align="center"
              >
                {skillLevels.type}
              </Typography>
            </Box>

            <Box >
              {skillLevels.skills.map((value: skillValues) => (
                <Box
                  key={value.uID}
                  sx={{
                    backgroundColor: "#48484894",
                    padding: "16px",
                    borderRadius: "8px",
                    margin: "16px",
                  }}
                  className="value-box"
                >
                  <ProgressBar
                    title={value.title}
                    value={value.value}
                    percentage={value.percentage}
                  />
                </Box>
              ))}
            </Box>

          </Box>
        ))}
      </Box>
  );
};

export default NewSkillDetails;
