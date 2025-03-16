import React, { forwardRef } from "react";
import { Box, Typography } from "@mui/material";
import WCMCard from "./WCMCard";

const WhyChooseMe = forwardRef<HTMLDivElement, React.PropsWithChildren<{}>>(
  (_, ref: any) => {
    console.log("<whychooseme >component");

    return (
      <>
        <div ref={ref}>
          <Box sx={{ width: "auto" }}>
            <Typography
              variant="h3"
              sx={{
                color: "#d52e2e",
                fontFamily: "Oswald-Bold",
                mt: "1rem",
                fontSize: {
                  lg: "3rem",
                  md: "2.6rem",
                  sm: "2.5rem",
                  xs: "2.25rem",
                },
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
