import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";

const HTitles = () => {
  return (
    <>
      <Box sx={{padding:"1% 4%"}}>
        <Typography
          variant="h1"
          sx={{
            color: "#e3e3e3",
            fontSize: {
              xl: "6rem",
              lg: "6rem",
              md: "5rem",
              sm: "4rem",
              xs: "3rem",
            },
            marginBottom: "1rem",
            fontFamily: "DancingScript-Regular",
            letterSpacing: "4px",
            textShadow:
              "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
          }}
        >
         Hi, This is Akash
        </Typography>

        <Typography
          variant="h2"
          sx={{
            color: "#e3e3e3",
            fontSize: {
              lg: "2.7rem",
              md: "2rem",
              sm: "2.25rem",
              xs: "1.5rem",
            },
             marginBottom: "1rem",
            fontFamily: "Oswald-Regular",
            letterSpacing: "4px",
            textShadow:
              " rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
          }}
          gutterBottom
        >
          Front-End Developer (React + TypeScript)
        </Typography>

        <Typography
          variant="body1"
          sx={{
            color: "#e3e3e3",
            fontSize: {
              lg: "1.174rem",
              md: "1.1rem",
              sm: "1rem",
              xs: "0.9rem",
            },
            marginBottom: "1rem",
            fontFamily: "Kanit-Light",
            letterSpacing: "4px",
            textShadow:
              " rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
          }}
          gutterBottom
        >
          I build clean, responsive, fast user interfaces using modern React
        </Typography>
      </Box>
    </>
  );
};
export default HTitles;
