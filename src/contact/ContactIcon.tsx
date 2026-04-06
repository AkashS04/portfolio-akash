import Box from "@mui/material/Box";

const ContactIcon = ({ imgSrc, clickValue, clickCall, alt }: any) => {
  const imageStlye = {
    height: { lg: "100px", md: "80px", sm: "50px", xs: "40px" },
    width: "auto",
    filter:
      "brightness(0) saturate(100%) invert(94%) sepia(4%) saturate(1%) hue-rotate(321deg) brightness(111%) contrast(82%)",
    display: "block",
  };
  return (
    <Box
      component="button"
      sx={{
        border: "none",
        background: "transparent",
        cursor: "pointer",
        padding: 0,
        transition: "transform 140ms ease-out",

        "&:hover": {
          transform: "scale(1.060)",
          filter:"brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(7500%) hue-rotate(256deg) brightness(101%) contrast(101%)",
        },
        "&:active": {
          transform: "scale(0.8)",
        },
        "& img": {
          userSelect: "none",
          WebkitUserDrag: "none",
          pointerEvents: "none",
        },
        "&:focus": {
          outline: "none",
        },
        WebkitTapHighlightColor: "transparent",
      }}
      onClick={() => clickCall(clickValue)}
    >
      <Box
        component="img"
        loading="lazy"
        sx={imageStlye}
        src={imgSrc}
        alt={alt}
      />
    </Box>
  );
};
export default ContactIcon;
