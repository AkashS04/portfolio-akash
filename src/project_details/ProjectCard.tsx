import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { projectData, projectDataType } from "./projectData.ts";
import ProjectImage from "./ProjectImage";

function ProjectCard() {
  return (
    <>
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
            1600: { slidesPerView: 4 },
          }}
          spaceBetween={10}
          speed={300}
        >
          {projectData.map((data: projectDataType) => (
            <SwiperSlide key={data.id}>
              <Box
                key={data.id}
                sx={{
                  // width: { lg: "300px", md: "300px", sm: "300px", xs: "300px" },
                  backgroundColor: "#18181880",
                  position: "relative",
                  height: {
                    xl: "460px",
                    lg: "405px",
                    md: "375px",
                    sm: "335px",
                  },
                  overflow: "hidden",
                  padding: { lg: "1rem", md: "1rem", sm: ".5rem", xs: ".5rem" },
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
                    height: "490px",
                    width: "100%",
                    top: "0px",
                    left: "0px",
                    borderRadius: "8px",
                    backgroundColor: "rgb(0 0 0 / 18%)",
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
                    fontWeight: "300",
                    color: "#00d9ffd7",
                    fontSize: {
                      lg: "1.5rem",
                      md: "1.5rem",
                      sm: "1.2rem",
                      xs: "1.5rem",
                    },
                    letterSpacing: "0.5pt",
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
                    color: "#e3e3e3",
                    fontSize: {
                      lg: "1.125rem",
                      md: "1.125rem",
                      sm: "1rem",
                      xs: "1rem",
                    },
                    letterSpacing: "0pt",
                    padding: "0px 8px 0px 8px",
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
    </>
  );
}

export default ProjectCard;
