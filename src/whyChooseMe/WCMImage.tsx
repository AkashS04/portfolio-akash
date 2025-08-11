import Box from "@mui/material/Box";

const WCMImage = ({ image }: any) => {
  return (
    <>
      <Box
        component="img"
        loading="lazy"
        src={image}
        sx={{
          filter:
            " brightness(0) saturate(100%) invert(61%) sepia(56%) saturate(2702%) hue-rotate(150deg) brightness(108%) contrast(103%)",
          width: {
            xl:"15%",
            lg: "18%",
            md: "50%",
            sm: "50%",
            xs: "40%",
          },
          height:{
            xl:"100%",
            lg: "50%",
            md: "50%",
            sm: "50%",
            xs: "50%",
          },
          mr:1
        }}
      />
    </>
  );
};
export default WCMImage;
