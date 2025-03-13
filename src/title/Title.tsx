import { Box } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import slide1 from "../assets/slider_images/slide-1.jpg";
import slide2 from "../assets/slider_images/slide-2.jpg";
import slide3 from "../assets/slider_images/slide-3.jpg";
import HeadTitle from "./HeadTitle";
import { useState } from "react";

function Title() {
  console.log("<Title >component");

  const swiperImage: any = [slide1, slide2, slide3];
  const [showDiv, setShowDiv] = useState(false);

  return (
    <Box>
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
              loading="lazy"
              onLoad={() => setShowDiv(true)}
              src={image}
              alt={image + "d"}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      {showDiv && <HeadTitle />}
    </Box>
  );
}
export default Title;
