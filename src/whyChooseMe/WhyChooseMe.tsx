import React, { forwardRef, useContext } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import WCMCard from "./WCMCard";
import { HomeCtx } from "../contexts/HomeCtx";

const WhyChooseMe = forwardRef<HTMLDivElement, React.PropsWithChildren<{}>>(
  (__) => {
    console.log("<whychooseme >component");

    const homeCtx = useContext(HomeCtx);
    const { whyChooseMeRef } = homeCtx;

    return (
      <>
        <div ref={whyChooseMeRef} className="whyChooseMeroot">
          <Box sx={{ width: "auto" }}>
            <Typography
              variant="h3"
              sx={{
                color: "#d52e2e",
                fontFamily: "Oswald-Bold",
                mt:{lg:8,md:6,sm:4 ,xs:4},mb:{lg:8,md:6,sm:4 ,xs:4},
                fontSize: {
                  lg: "3rem",
                  md: "2.6rem",
                  sm: "2.5rem",
                  xs: "2.25rem",
                },
                letterSpacing: "4px"
              }}
              gutterBottom
            >
              WHY CHOOSE ME
            </Typography>
            <WCMCard />
          </Box>
        </div>
      </>
    );
  }
);
export default WhyChooseMe;
