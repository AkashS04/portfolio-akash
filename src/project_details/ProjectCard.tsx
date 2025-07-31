import { Box, Typography } from "@mui/material";
import EcommerceImg from "../assets/MyProjects/ECommerceWebsite.jpg";
import BussinessImg from "../assets/MyProjects/BussinessWebsite.jpg";
import StartupImg from "../assets/MyProjects/StartupWebsite.jpg";
import PersonalImg from "../assets/MyProjects/PersonalWebsite.jpg";
import PortfolioImg from "../assets/MyProjects/PortfolioWebsite.jpg";
import ProjectImage from "./ProjectImage";
function ProjectCard() {
  const projectData: any = [
    {
      id: 12,
      img: BussinessImg,
      title: "Bussiness Websites",
      content: "Robust Bussiness Websites for Clients",
      alt:"bussiness-image"
    },
    {
      id: 11,
      img: EcommerceImg,
      title: "ECommerse Websites",
      content: "Robust ECommerce Websites for Clients",
      alt:"ecommerce-image"

    },

    {
      id: 14,
      img: PersonalImg,
      title: "Personal Websites",
      content: "Robust Personal Websites for Clients",
      alt:"personal-website-image"

    },
    {
      id: 15,
      img: PortfolioImg,
      title: "Portfolio Websites",
      content: "Robust Portfolio Websites for Clients",
      alt:"porfolio-image"

    },
    {
      id: 13,
      img: StartupImg,
      title: "StartUp Websites",
      content: "Robust StartUp Websites for Clients",
      alt:"startup-image"

    },
  ];
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          padding: {
            lg: "2rem 4rem 2rem 4rem",
            md: "2rem 4rem 2rem 4rem",
            sm: "2rem 2rem",
          },
          justifyContent: "space-around",
        }}
      >
        {projectData.map((data: any) => (
          <Box
            key={data.id}
            sx={{
              width: { lg: "300px", md: "300px", sm: "300px", xs: "300px" },
              backgroundColor: "#181818",
              position: "relative",
              overflow: "hidden",
              padding: { lg: "2rem", md: "2rem", sm: "1rem", xs: "1rem" },
              border: "1px solid #121212",
              borderRadius: "1rem",
              margin: {
                lg: "0rem 0rem 2rem 0rem",
                md: "0rem 0rem 2rem 0rem",
                sm: "0rem 0rem 2rem 0rem",
                xs: "0rem 1rem 2rem 1rem",
              },
              cursor: "default",
              "::after": {
                content: '""',
                position: "absolute",
                height: "400px",
                width: "400px",
                top: "0px",
                left: "0px",
                borderRadius: "1rem",
                backgroundColor: "rgb(0 0 0 / 38%)",
                transition: "transform 400ms ease-in-out",
              },
              "&:hover::after": {
                transform: "translate(370px, 500px) rotate(-60deg)",
              },
            }}
          >
            <ProjectImage image={data.img} alt={data.alt}/>
            <Typography
              variant="h5"
              sx={{
                fontFamily: "Kanit-Regular",
                color: "#00d8ff",
                fontSize: {
                  lg: "1.5rem",
                  md: "1.5rem",
                  sm: "1.5rem",
                  xs: "1.5rem",
                },
                letterSpacing:"1.6px",
              }}
              gutterBottom
            >
              {data.title}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontFamily: "Kanit-Light",
                color: "#e3e3e3",
                fontSize: {
                  lg: "1.125rem",
                  md: "1.125rem",
                  sm: "1rem",
                  xs: "1rem",
                },
                letterSpacing:"0.8px",
              }}
              gutterBottom
            >
              {data.content}
            </Typography>
          </Box>
        ))}
      </Box>
    </>
  );
}

export default ProjectCard;
