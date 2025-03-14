import React,{ forwardRef } from "react";
import { Box, Typography } from "@mui/material";
import EcommerceImg from "../assets/MyProjects/ECommerceWebsite.jpg";
import BussinessImg from "../assets/MyProjects/BussinessWebsite.jpg";
import StartupImg from "../assets/MyProjects/StartupWebsite.jpg";
import PersonalImg from "../assets/MyProjects/PersonalWebsite.jpg";
import PortfolioImg from "../assets/MyProjects/PortfolioWebsite.jpg";

const Project = forwardRef<HTMLDivElement,React.PropsWithChildren<{}>>((_,ref: any) => {

  console.log('<project >component')
  const projectData: any = [
    {
      id: 11 ,
      img: EcommerceImg,
      title: "ECommerse Websites",
      content: "Robust ECommerce Websites for Clients",
    },
    {
      id: 12  ,
      img: BussinessImg,
      title: "Bussiness Websites",
      content: "Robust Bussiness Websites for Clients",
    },
    {
      id: 13 ,
      img: StartupImg,
      title: "StartUp Websites",
      content: "Robust StartUp Websites for Clients",
    },
    {
      id:14  ,
      img: PersonalImg,
      title: "Personal Websites",
      content: "Robust Personal Websites for Clients",
    },
    {
      id: 15 ,
      img: PortfolioImg,
      title: "Portfolio Websites",
      content: "Robust Portfolio Websites for Clients",
    },
  ];

  return (
    <div ref={ref}>
      <Box>
        <Typography
          variant="h3"
          sx={{
            color: "#d52e2e",
            fontFamily: "Oswald-Bold",
            mt: "1rem",
            fontSize: {
              lg: "3rem",
              md: "2.6rem",
              sm: "2.5rem",
              xs: "2.25rem"
            },
          }}
          gutterBottom
        >
          PROJECTS
        </Typography>
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
                  xs: "0rem 1rem 1rem 1rem",
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
                  transition: "transform 650ms ease",
                },
                "&:hover::after": {
                  transform: "translate(370px, 500px)",
                },
              }}
            >
              <Box
                component="img"
                sx={{
                  height: { lg: "auto", md: "auto", sm: "200px", xs: "200px" },
                  width: { lg: "300px", md: "300px", sm: "300px", xs: "300px" },
                }}
                src={data.img}
              />
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
                }}
                gutterBottom
              >
                {data.content}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </div>
  );
});
export default Project;
