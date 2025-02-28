import { Box } from "@mui/material";

import * as motion from "motion/react-client";
import reactLogo from "../assets/react.svg";

const AnimatedLogo: React.FC = () => {
  return (
    <>
    <div style={{overflow:"hidden"}}>
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
      >
        <Box
          component="img"
          sx={{
            height: {
              xl: "80px",
              md: "65px",
              sm: "50px",
              xs: "45px",
            },
            cursor: "pointer",
          }}
          alt="react-logo"
          src={reactLogo}
        />
      </motion.div>
      </div>
    </>
  );
};
export default AnimatedLogo;
