import { Box } from "@mui/material";

import * as motion from "motion/react-client";
import reactLogo from "../assets/react.svg";

const AnimatedLogo: React.FC = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
          height: {
            xl: "95px",
            md: "80px",
            sm: "65px",
            xs: "55px",
          },
        }}
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear"}}
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
              width:"auto",
              cursor: "pointer",
            }}
            alt="react-logo"
            src={reactLogo}
          />
        </motion.div>
      </Box>
    </>
  );
};
export default AnimatedLogo;
