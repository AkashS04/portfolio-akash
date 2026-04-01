import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { projectData, projectDataType } from "./projectData.ts";
import ProjectImage from "./ProjectImage";
import Framer from "../framer/Framer.tsx";

function ProjectCard() {
  return (
    <>
      <Framer>
        <Box
          sx={{
            padding: { lg: "8% 8%", md: "8% 6%", sm: "8% 3%", xs: "8% 3%" },
            WebkitBackdropFilter: " blur(8px)",
            backdropFilter: "blur(8px)",
            background: "rgb(4 0 255 / 8%)",
          }}
        >
          <Swiper
            className="project-swiper"
            loop={true}
          
            cssMode={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            modules={[Navigation, Pagination, Autoplay]}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1.5 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1200: { slidesPerView: 4 },
              1600: { slidesPerView: 6 },
            }}
            spaceBetween={14}
            speed={400}
          >
            {projectData.map((data: projectDataType) => (
              <SwiperSlide key={data.id}>
                <Box
                  key={data.id}
                  sx={{
                    backgroundColor: "rgba(0, 0, 255, 0.37)",
                    position: "relative",
                    height: {
                      xl: "460px",
                      lg: "405px",
                      md: "375px",
                      sm: "335px",
                    },
                    overflow: "hidden",
                    padding: 0,
                    border: "1px solid #121212",
                    borderRadius: "8px",
                    margin: {
                      lg: "0rem 0rem 2rem 0rem",
                      md: "0rem 0rem 2rem 0rem",
                      sm: "0rem 0rem 2rem 0rem",
                      xs: "0rem 1rem 2rem 1rem",
                    },
                    transition: "all 250ms ease-in",
                    "&:hover": {
                      transform: "scale(0.98)",
                      overflow: "hidden",
                    },
                    cursor: "default",
                    "::after": {
                      content: '""',
                      position: "absolute",
                      filter:" blur(8px)",
                      height: "490px",
                      width: "100%",
                      top: "0px",
                      left: "0px",
                      borderRadius: "8px",
                      backgroundColor: "rgb(0 15 255 / 16%)",
                      transition: "transform 300ms ease-in-out",
                    },
                    "&:hover::after": {
                      transform: "translate(370px, 500px) rotate(-135deg)",
                    },
                  }}
                >
                  <ProjectImage image={data.img} alt={data.alt} />
                  <Typography
                    variant="h5"
                    sx={{
                      fontFamily: "Sora",
                      fontWeight: "400",
                      color: "#ffffff",
                      fontSize: {
                        lg: "1.4rem",
                        md: "1.4rem",
                        sm: "1.2rem",
                        xs: "1.5rem",
                      },
                      textAlign: "left",
                      paddingLeft: "12px",
                    }}
                    gutterBottom
                  >
                    {data.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      fontFamily: "Inter",
                      fontWeight: "300",
                      color: " #c7c7c7",
                      fontSize: "16px",
                      letterSpacing: "0pt",
                      textAlign: "left",
                      paddingLeft: "12px",
                    }}
                    gutterBottom
                  >
                    {data.content}
                  </Typography>
                </Box>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Framer>
    </>
  );
}

export default ProjectCard;
