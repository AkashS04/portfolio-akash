import React, { useEffect, useState } from "react";
import * as motion from "motion/react-client";
import IconButton from "@mui/material/IconButton";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";

const BackToTop: React.FC = () => {
  const [showButton, setShowButton] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!showButton) return null;

  return (
    <>
      <div className="scroll-icon">
        <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
          <IconButton
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            sx={{
              color: "#ffffff",
              transition: "transform 150ms ease-out",
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
