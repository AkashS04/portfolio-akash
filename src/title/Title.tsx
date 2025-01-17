import { Box, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {Navigation, Pagination,Autoplay} from 'swiper/modules';
import slide1 from "../assets/slider_images/slide-1.jpg";
import slide2 from "../assets/slider_images/slide-2.jpg";
import slide3 from "../assets/slider_images/slide-3.jpg";
function Title() {
  return (
    <div className="titleDiv">
        <div className="">
      <Swiper
        className="swipermain"
        loop={true}
        cssMode={true}
         autoplay={{ delay: 3500, disableOnInteraction: false, pauseOnMouseEnter: true}}
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={1}
        spaceBetween={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide className="swipercontainer">
          <img className="swiperimage" src={slide1} alt="slide-1" />
        </SwiperSlide>
        <SwiperSlide className="swipercontainer">
          <img className="swiperimage" src={slide2} alt="slide-2" />
        </SwiperSlide>
        <SwiperSlide className="swipercontainer">
          <img className="swiperimage" src={slide3} alt="slide-3" />
        </SwiperSlide>
      </Swiper>
      <Box className="home-title-box" sx={{ width: "100%", height: "auto" }}>
        <Typography
          variant="h1"
          sx={{
            color: "#e3e3e3",
            fontSize: {
              lg: "6rem",
              md: "4rem",
              sm: "3rem",
              xs: "2rem",
            },
            fontFamily:'PlaywriteIN-Light',
            textShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',
          }}
          gutterBottom
        >
          Hi,This is Akash
        </Typography>
        <Typography variant="h2" sx={{
            color: "#e3e3e3",
            fontSize: {
              lg: "4rem",
              md: "3rem",
              sm: "2rem",
              xs: "1rem",
            },
            fontFamily:'Oswald-Regular',
            textShadow:' rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px'
          }} gutterBottom>
        React Developer
        </Typography>
      </Box>
    </div>
    </div>
  
  );
}
export default Title;
