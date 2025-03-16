import { Box } from "@mui/material";

const WCMImage = ({ image }: any) => {
  return (
    <>
      <Box
        component="img"
        loading="lazy"
        src={image}
        sx={{
          filter:
            // "invert(85%) sepia(7%) saturate(26%) hue-rotate(319deg) brightness(101%) contrast(104%)",
            " brightness(0) saturate(100%) invert(61%) sepia(56%) saturate(2702%) hue-rotate(150deg) brightness(108%) contrast(103%)",
          height: {
            lg: "75px",
            md: "65px",
            sm: "45px",
            xs: "40px",
          },
          width: "auto",
        }}
      />
    </>
  );
};
export default WCMImage;
