import Box from "@mui/material/Box";

const ContactIcon = ({ imgSrc, clickValue, clickCall, alt }: any) => {
  const imageStlye = {
    cursor: "pointer",
    height: { lg: "100px", md: "80px", sm: "50px", xs: "40px" },
    width: "auto",
    filter:
      "invert(85%) sepia(7%) saturate(26%) hue-rotate(319deg) brightness(101%) contrast(104%)",
    transition: "transform 140ms ease-out",
    opacity: "0.7",
    "&:hover": {
      transform: "scale(1.060)",
      opacity: "0.9",
    },
    "&:active": {
      transform: "scale(0.8)",
    },
    userSelect: "none",
    webKitUserDrag: "none",
    pointerEvent: "none",
    outLine:"none"
  };
  return (
    <Box
      component="img"
      loading="lazy"
      sx={imageStlye}
      src={imgSrc}
      onClick={() => clickCall(clickValue)}
      alt={alt}
    />
  );
};
export default ContactIcon;
