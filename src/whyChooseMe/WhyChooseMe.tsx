import React, { forwardRef, useContext } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import WCMCard from "./WCMCard";
import { HomeCtx } from "../contexts/HomeCtx";
import Framer from "../framer/Framer";

const WhyChooseMe = forwardRef<HTMLDivElement, React.PropsWithChildren<{}>>(
  (__) => {
    console.log("<whychooseme >component");

    const homeCtx = useContext(HomeCtx);
    const { whyChooseMeRef } = homeCtx;

    return (
      <>
        <div ref={whyChooseMeRef} className="whyChooseMeroot  why-choose-me-linear">
          <Box sx={{ width: "auto", scrollSnapAlign: "start" }}>
            <Framer>
            <Typography
              variant="h3"
              sx={{
                color: "#ffffff",
                fontFamily: "Oswald-Bold",
                pt: { lg: 8, md: 6, sm: 4, xs: 4 },
                pb: { lg: 8, md: 6, sm: 4, xs: 4 },
                fontSize: {
                  lg: "3rem",
                  md: "2.6rem",
                  sm: "2.5rem",
                  xs: "2.25rem",
                },
                letterSpacing: "1.0pt",
              }}
              gutterBottom
            >
              HOW I WORK
            </Typography>
            </Framer>
            <Framer>
            <WCMCard />
            </Framer>
          </Box>
        </div>
      </>
    );
  },
);
export default WhyChooseMe;
