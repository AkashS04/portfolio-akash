import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";

const HTitles = () => {
  return (
    <>
      <Box sx={{textAlign:"left"}}>
        <Typography
          variant="h1"
          sx={{
            color: "#d9d9d9f2",
            fontSize: {
              xl: "6rem",
              lg: "6rem",
              md: "5rem",
              sm: "4rem",
              xs: "5.25rem",
            },
            marginBottom: "1rem",
            fontFamily: "Space Grotesk",
            fontWeight: "400",
            letterSpacing: {
              lg:"1pt",
              xs:"0pt"
            },
            lineHeight:{
              lg:"1.1",
              xs:"1"
            },
            textShadow:
              "3px 2px 8px rgba(32,14,9,0.7)"
          }}
        >
         HI, I'M AKASH
        </Typography>

        <Typography
          variant="h2"
          sx={{
            color: "#e4e3e3b3",
            fontSize: {
              lg: "2.7rem",
              md: "2rem",
              sm: "2.25rem",
              xs: "1.5rem",
            },
             marginBottom: "1rem",
            fontFamily: "Sora",
            fontWeight:"300",
            letterSpacing: "0.5pt",
            lineHeight: "1.5",
            textShadow:
              "3px 2px 8px rgba(32,14,9,0.7)",
          }}
          gutterBottom
        >
          REACT FRONTEND DEVELOPER (TYPESCRIPT)
        </Typography>

        <Typography
          variant="body1"
          sx={{
            color: "#b4b4b4a8",
            fontSize:"16px",
            marginBottom: "1rem",
            fontFamily: "Inter",
            fontWeight:"300",
            letterSpacing: "0.15pt",
            textShadow:
              " rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
          }}
          gutterBottom
        >
          Building scalable fronend architecture, maintainable component systems and high-performance user interfaces
        </Typography>
      </Box>
    </>
  );
};
export default HTitles;
