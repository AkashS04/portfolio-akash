import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { whyChooseMeData, whyChooseMeDataType } from "./whyChooseMeData.ts";
import WCMImage from "./WCMImage";
const WCMCard = () => {
  return (
    <>
      <Box
        sx={{
          padding: "4% 8% 8% 8%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: { lg: "2rem", md: "1rem", sm: "0.5rem", xs: "0.8rem" },
            justifyContent: "center",
          }}
        >
          {whyChooseMeData.map((skills: whyChooseMeDataType) => (
            <Box
              key={skills.uId}
              sx={{
                width: {
                  lg: "40%",
                  md: "40%",
                  sm: "100%",
                  xs: "100%",
                },
                height: {
                  lg: "140px",
                  md: "140px",
                  sm: "140px",
                  xs: "140px",
                },
                display: "flex",
                alignItems: "center",
                gap: {
                  lg: "1rem",
                  md: "0.5rem",
                  sm: "0.5rem",
                  xs: "0.5rem",
                },
                padding: {
                  lg: "2rem",
                  md: "1.5rem",
                  sm: "1rem",
                  xs: "1rem",
                },
                backgroundColor: "#35353594",
                borderRadius: "1rem",
                boxShadow: "rgba(0, 0, 0, 0.2) 0px 18px 50px -10px",
              }}
            >
              <WCMImage image={skills.skillIcon} />
              <Box>
                <Typography
                  variant="h5"
                  align="left"
                  sx={{
                    fontFamily: "Kanit-Regular",
                    color: "#e3e3e3",
                    fontSize: {
                      xl: "2.25rem",
                      lg: "1.8rem",
                      md: "1.125rem",
                      sm: "1.125rem",
                      xs: "1.125rem",
                    },
                    letterSpacing: "1.6px",
                    mb: 1,
                  }}
                >
                  {skills.title}
                </Typography>
                <Typography
                  variant="body1"
                  align="left"
                  sx={{
                    fontFamily: "kanit-Light",
                    color: "#e3e3e3",
                    fontSize: {
                      lg: "1.125rem",
                      md: "1.125rem",
                      sm: "1rem",
                      xs: "1rem",
                    },
                    letterSpacing: "0.8px",
                  }}
                >
                  {skills.name}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </>
  );
};
export default WCMCard;
