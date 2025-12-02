import Box from "@mui/material/Box";

function ProjectImage({image,alt}:any) {
  return (
    <>
      <Box
        component="img"
        loading="lazy"
        sx={{
          height: { lg: "auto", md: "auto", sm: "200px", xs: "200px" },
          width: "100%",
          mb:{lg:4,md:3,sm:2 ,xs:2},
          borderRadius: "8px 8px 0rem 0rem"
        }}
        src={image}
        alt={alt}
      />
    </>
  );
}
export default ProjectImage;
