import { Box } from "@mui/material";
import HTitles from "./HTitles";
import AnimatedLogo from "./AnimatedLogo";

const HeadTitle: React.FC = () => {
  return (
    <>
      <Box className="home-title-box" sx={{ width: "100%", height: "auto" }}>
        <HTitles />
        <AnimatedLogo />
      </Box>
    </>
  );
};
export default HeadTitle;
