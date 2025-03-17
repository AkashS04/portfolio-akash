import { Box } from "@mui/material";

function ProjectImage({image,alt}:any) {
  return (
    <>
      <Box
        component="img"
        loading="lazy"
        sx={{
          height: { lg: "auto", md: "auto", sm: "200px", xs: "200px" },
          width: { lg: "300px", md: "300px", sm: "300px", xs: "300px" },
        }}
        src={image}
        alt={alt}
      />
    </>
  );
}
export default ProjectImage;
