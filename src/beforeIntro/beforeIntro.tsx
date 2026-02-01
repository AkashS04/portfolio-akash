"use client";

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
    <Box sx={{ height: "100vh", margin: 0 }}>
      <Box sx={{ padding: "16px" }}>
        <Box sx={{ border: "1.25px #00d8ff solid", borderRadius: "8px" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
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
          </Box>
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
                width: 8px;
                height: 8px;
                border-radius: 8px ;
                background-color:#00d8ff;
                will-change: transform;
            }
            `}
    </style>
  );
}

export default LoadingThreeDotsJumping;
