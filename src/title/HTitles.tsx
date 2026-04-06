import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import { memo } from "react";
import "./HTitle.css";
import TechPill from "../TechPill";

const HTitles = memo(() => {
  return (
    <Box sx={{ textAlign: "left", width: { lg:"50%", md:"80%", sm:"100%", xs:"100%" } }}>
      <div className="" style={{ marginBottom: "16px" }}>
        <TechPill skill="React . TypeScript" color="blue" />
      </div>
      <Typography
        variant="h1"
        className="slide-left delay-0"
        sx={{
          color: "#ffffff",
          fontSize: {
            xl: "10rem",
            lg: "9rem",
            md: "8rem",
            sm: "7rem",
            xs: "6rem",
          },
          marginBottom: "1rem",
          fontFamily: "Bebas Neue, sans-serif",
          fontWeight: "400",
          fontStyle:"normal",
          letterSpacing: { lg: "1pt", xs: "0pt" },
          lineHeight: { lg: "1.1", xs: "1" },
          textShadow: "3px 2px 8px rgba(32,14,9,0.7)",
        }}
      >
        HI, I'M AKASH
      </Typography>

      <Typography
        variant="body1"
        className="slide-left delay-2"
        sx={{
          color: " #c7c7c7",
          fontSize: "16px",
          marginBottom: "1rem",
          fontFamily: "Inter",
          fontWeight: "300",
          letterSpacing: "0.15pt",
          textShadow:
            "rgba(0,0,0,0.25) 0px 54px 55px, rgba(0,0,0,0.12) 0px -12px 30px",
        }}
        gutterBottom
      >
        Building scalable frontend architecture, maintainable component systems
        and high-performance user interfaces
      </Typography>
    </Box>
  );
});

export default HTitles;
