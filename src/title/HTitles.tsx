import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import { memo } from "react";
import "./HTitle.css";
import TechPill from "../TechPill";

const HTitles = memo(() => {

  return (
    <Box sx={{ textAlign: "left", width: { lg: "60%", md: "80%", sm: "100%", xs: "100%" } }}>
      <div className="">
        <div className="" style={{ marginBottom: "16px" }}>
          <TechPill skill="React . TypeScript" color="blue" />
        </div>
        <div className="" style={{marginBottom:"16px"}}>

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
              fontStyle: "normal",
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
          </Typography></div>
        <div className="">
          <div className="ctc-div">

            <div style={{ border: "1px solid white", width: "100px", display: "flex", justifyContent: "center", alignItems: "center", borderRadius: "16px", marginBottom: "8px", padding:"2px"}}>
              <span className="dot" style={{
                width: "8px",
                height: "8px",
                background: "#6ee7b7",
                borderRadius: "50%",
                boxShadow: " 0 0 6px #6ee7b7",
                marginRight: "8px"
              }}></span>
              <p style={{ color: "#dcdcdc", fontFamily: "Inter", fontWeight: "600", fontSize: "14px", margin: 0 }}>Live Demo</p>
            </div>
            <div className="" style={{marginBottom:"16px"}}>
              <h3 style={{
                color: "#e8e8e8",
                fontFamily: "Inter",
                fontWeight: "700",
                fontSize: "18px",
                margin: "0px 0px 8px 0px"
              }}>Asset Management System</h3>
              <p
                style={{
                  color: "#c7c7c7",
                  fontFamily: "Inter",
                  fontWeight: "300",
                  fontSize: "14px",
                  margin:0
                }}
              >Track, manage, and optimize assets in real-time with a powerful dashboard built in React + TypeScript.</p>
            </div>

            <button style={{ background: "#4f00ffb3", padding: "8px", borderRadius: "8px", border: "rgba(0, 0, 255, 0.37)", boxShadow: " rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px" }} ><a style={{
              color: "#ffffff",
              fontFamily: "Inter",
              textDecoration: "none",
              fontWeight: "600",
              fontSize: "14px",
            }} href="https://asset-management-system-nine-silk.vercel.app/" target="_blank">View DEMO-ASM</a></button>
          </div>
        </div>
      </div>
    </Box>
  );
});

export default HTitles;
