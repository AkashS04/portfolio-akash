import { Box, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import slide1 from "../assets/slider_images/slide-1.jpg";
import slide2 from "../assets/slider_images/slide-2.jpg";
import slide3 from "../assets/slider_images/slide-3.jpg";
import { useState } from "react";
import HeadTitle from "./HeadTitle";
function Title() {
  console.log("<Title >component");

  const swiperImage: any = [slide1, slide2, slide3];
  const [showDiv, setShowDiv] = useState(false);

  return (
    <div className="titleDiv">
      {!showDiv && (
        <Box sx={{ width: "100%", height: "100%" }}>
          <Typography
            variant="h3"
            sx={{
              color: "#e3e3e3",
              fontFamily: "PlaywriteIN-Light",
              fontSize: {
                lg: "4rem",
                md: "3rem",
                sm: "2.25rem",
                xs: "2.05rem",
              },
            }}
          >
            Loading...
          </Typography>
        </Box>
      )}
      <div className="">
        <Swiper
          className="swipermain"
          loop={true}
          cssMode={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          modules={[Navigation, Pagination, Autoplay]}
          slidesPerView={1}
          spaceBetween={1}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {swiperImage.map((image: any) => (
            <SwiperSlide key={image + "a2"} className="swipercontainer">
              <img
                className="swiperimage"
                onLoad={() => setShowDiv(true)}
                src={image}
                alt={image + "d"}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <HeadTitle />
      </div>
    </div>
  );
}
export default Title;
