import Box from "@mui/material/Box";

const WCMImage = ({ image }: any) => {
  return (
    <>
    <div className="" style={{
      width:"100%",
      height:"auto",
      display:"flex",
      justifyContent:"left",
      alignItems:"center"
    }}>
      <Box
        component="img"
        loading="lazy"
        src={image}
        sx={{
          filter:
            " brightness(0) saturate(100%) invert(61%) sepia(56%) saturate(2702%) hue-rotate(150deg) brightness(108%) contrast(103%)",
          width: {
            xl: "18%",
            lg: "14%",
            sm:"8%",
            xs: "14%",
          },
          height: "100%",
          mr: 1,
        }}
      />
      </div>
    </>
  );
};
export default WCMImage;
