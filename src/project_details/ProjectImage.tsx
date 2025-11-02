import Box from "@mui/material/Box";

function ProjectImage({image,alt}:any) {
  return (
    <>
      <Box
        component="img"
        loading="lazy"
        sx={{
          height: { lg: "auto", md: "auto", sm: "200px", xs: "200px" },
          width: { lg: "300px", md: "300px", sm: "300px", xs: "300px" },
          mb:{lg:4,md:3,sm:2 ,xs:2},
          borderRadius: "1rem 1rem 0rem 0rem"
        }}
        src={image}
        alt={alt}
      />
    </>
  );
}
export default ProjectImage;
