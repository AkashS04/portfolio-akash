"use client";

import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { motion, Variants } from "motion/react";

function LoadingThreeDotsJumping() {
  const dotVariants: Variants = {
    jump: {
      y: -30,
      transition: {
        duration: 0.78,
        repeat: Infinity,
        repeatType: "mirror",
        ease: "easeInOut",
      },
    },
  };

  return (
    <Box sx={{ height: "100vh", margin: 0, background:"linear-gradient(135deg, #000000 0%, #2e003e 50%, #0000ff 100%)" }}>
      <Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItem: "center",
            height: "calc(100vh - 34px) !important",
          }}
        >
          <motion.div
            animate="jump"
            transition={{ staggerChildren: -0.2, staggerDirection: -1 }}
            className="container"
          >
            <motion.div className="dot" variants={dotVariants} />
            <motion.div className="dot" variants={dotVariants} />
            <motion.div className="dot" variants={dotVariants} />
            <motion.div className="dot" variants={dotVariants} />
            <motion.div className="dot" variants={dotVariants} />
            <motion.div className="dot" variants={dotVariants} />
            <StyleSheet />
          </motion.div>
          <Typography
            variant="body1"
            sx={{
                  fontFamily:"Inter",
            fontWeight:"400",
              lineHeight: "1.5",
              marginTop: "1rem",
              color: "#ffffffa8",
              textAlign: "center",
            }}
          >
            Initailizing Portfolio...
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

/**
 * ==============   Styles   ================
 */
function StyleSheet() {
  return (
    <style>
      {`
            .container {
                display: flex;
                justify-content: center;
                align-items: center;
                gap:6px;
            }

            .dot {
                width: 4px;
                height: 4px;
                border-radius: 8px ;
                background-color:#00d8ff;
                will-change: transform;
            }
            `}
    </style>
  );
}

export default LoadingThreeDotsJumping;
