import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ProblemSolving from "../assets/skillsIcons/problem-solving.png";
import TeamPlayer from "../assets/skillsIcons/team.png";
import ProjectPlaning from "../assets/skillsIcons/project.png";
import Research from "../assets/skillsIcons/research.png";
import MultiTasking from "../assets/skillsIcons/multitask.png";
import WCMImage from "./WCMImage";
const Skillset = [
  {
    uId: 111,
    skillIcon: ProblemSolving,
    title: "Problem Solving",
    name: "Implement creative ideas for Analyzed and Recognized core issues",
    alt: "problem-solving-image",
  },
  {
    uId: 222,
    skillIcon: TeamPlayer,
    title: "Team & Collabration",
    name: "Add values for the team efforts and Assistive for others to achieving team objectives",
    alt: "team-player-image",
  },
  {
    uId: 333,
    skillIcon: ProjectPlaning,
    title: "Project Planning",
    name: "Developing and detailing outline or strategy for the project with Arranged tasks,resources,and schedules effectively",
    alt: "project-planing-image",
  },
  {
    uId: 444,
    skillIcon: Research,
    title: "Research",
    name: "collective and organize data or examine data and information to draw conclusions ",
    alt: "research-image",
  },
  {
    uId: 555,
    skillIcon: MultiTasking,
    title: "Multitasking",
    name: "Manage multiple task with responsibility and took care of various tasks efficiently at the same time",
    alt: "multitasking-image",
  },
];
const WCMCard = () => {
  return (
    <>
      <Box sx={{ padding: { lg: "2rem 4rem", md: "1rem 3rem" } }}>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: { lg: "2rem", md: "1rem", sm: "0.5rem", xs: "0.8rem" },
            justifyContent: "center",
          }}
        >
          {Skillset.map((skills: any) => (
            <Box
              key={skills.uId}
              sx={{
                width: {
                  lg: "40%",
                  md: "40%",
                  sm: "40%",
                  xs: "80%",
                },
                height: {
                  lg: "140px",
                  md: "140px",
                  sm: "140px",
                  xs: "140px",
                },
                display: "flex",
                alignItems: "center",
                gap: {
                  lg: "1rem",
                  md: "0.5rem",
                  sm: "0.5rem",
                  xs: "0.5rem",
                },
                margin: {
                  lg: "0.5rem 1rem",
                  md: "0.5rem 1rem",
                  sm: "1rem 0.8rem",
                  xs: "1rem 2rem",
                },
                padding: {
                  lg: "2rem",
                  md: "1.5rem",
                  sm: "1rem",
                  xs: "1rem",
                },
                backgroundColor: "#35353594",
                borderRadius: "1rem",
                boxShadow: "rgba(0, 0, 0, 0.2) 0px 18px 50px -10px",
              }}
            >
              <WCMImage image={skills.skillIcon} />
              <Box>
                <Typography
                  variant="h5"
                  align="left"
                  sx={{
                    fontFamily: "Kanit-Regular",
                    color: "#e3e3e3",
                    fontSize: {
                      xl: "2.25rem",
                      lg: "1.8rem",
                      md: "1.125rem",
                      sm: "1.125rem",
                      xs: "1.125rem",
                    },
                    letterSpacing: "1.6px",
                    mb: 1
                  }}
                >
                  {skills.title}
                </Typography>
                <Typography
                  variant="body1"
                  align="left"
                  sx={{
                    fontFamily: "kanit-Light",
                    color: "#e3e3e3",
                    fontSize: {
                      lg: "1.125rem",
                      md: "1.125rem",
                      sm: "1rem",
                      xs: "1rem",
                    },
                    letterSpacing: "0.8px"
                  }}
                >
                  {skills.name}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </>
  );
};
export default WCMCard;
