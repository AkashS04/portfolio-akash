import Box from "@mui/material/Box";

const ContactIcon = ({ imgSrc, clickValue, clickCall, alt }: any) => {
  const imageStlye = {
    height: { lg: "100px", md: "80px", sm: "50px", xs: "40px" },
    width: "auto",
    filter:
      "invert(85%) sepia(7%) saturate(26%) hue-rotate(319deg) brightness(101%) contrast(104%)",
    opacity: "0.7",
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
          opacity: "0.9",
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
