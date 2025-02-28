import { Box, Typography } from "@mui/material";
import AnimatedLogo from "./AnimatedLogo";

const HeadTitle:React.FC=()=>{
return<>
  <Box className="home-title-box" sx={{ width: "100%", height: "auto" }}>
          <Typography
            variant="h1"
            sx={{
              color: "#e3e3e3",
              fontSize: {
                lg: "6rem",
                md: "4rem",
                sm: "3rem",
                xs: "2rem",
              },
              fontFamily: "PlaywriteIN-Light",
              textShadow:
                "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
            }}
            gutterBottom
          >
            Hi,This is Akash
          </Typography>

          <Typography
            variant="h2"
            sx={{
              color: "#e3e3e3",
              fontSize: {
                lg: "4rem",
                md: "3rem",
                sm: "2.25rem",
                xs: "2.25rem",
              },
              fontFamily: "Oswald-Regular",
              textShadow:
                " rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
            }}
            gutterBottom
          >
            React Developer
          </Typography>
          <AnimatedLogo />
        </Box>
</>
}
export default HeadTitle