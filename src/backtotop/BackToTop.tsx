import React from "react";
import * as motion from "motion/react-client";
import { IconButton } from "@mui/material";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";

const BackToTop: React.FC = () => {
  function handleScroll() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }
  return (
    <>
      <div className="scroll-icon">
        <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
          <IconButton
            onClick={handleScroll}
            sx={{
              color: "#d52e2e",
            }}
          >
            <ArrowCircleUpIcon fontSize="large" />
          </IconButton>
        </motion.div>
      </div>
    </>
  );
};

export default BackToTop;
