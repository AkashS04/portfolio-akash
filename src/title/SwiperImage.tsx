import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import slide1 from "../assets/slider_images/slide-1.jpg";
import slide2 from "../assets/slider_images/slide-2.jpg";
import slide3 from "../assets/slider_images/slide-3.jpg";
import { useContext, useState } from "react";
import { HomeCtx } from "../contexts/HomeCtx";
function SwiperImage() {
  const swiperImage: any = [slide1, slide2, slide3];
  const homeCtx = useContext(HomeCtx);
  const { setTitleLoading } = homeCtx;
  const [imgLoading, setImgLoading] = useState(true);
  return (
    <>
      {!imgLoading && <div className="titleDiv"></div>}

      <Swiper
        className="swipermain"
        loop={true}
        cssMode={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={1}
        spaceBetween={1}
        speed={800}
      >
        {swiperImage.map((image: any) => (
          <SwiperSlide key={image + "a2"}>
            <img
              className="swiperimage"
              onLoad={() => setTitleLoading(true) && setImgLoading(false)}
              src={image}
              alt={image + "d"}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
export default SwiperImage;
