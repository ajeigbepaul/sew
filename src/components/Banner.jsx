import React from "react";
// import SwiperCore, {
//   // EffectCoverflow,
//   Pagination,
//   // Autoplay,
//   Navigation,
//   // EffectFade,
// } from "swiper";
import Slider from "./Slider";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "../swiper.css";
// import required modules
import { Autoplay,EffectFade, Navigation, Pagination } from 'swiper/modules';
const banner = [
  { name: "Men suit", image: "/banner1.jpg" },
  { name: "Men suit pro", image: "/banner2.jpg" },
  { name: "Women classic", image: "/femaleexc4.jpg" },
  { name: "Only the best", image: "/fashionwork.jpg" },
];

function Banner() {
  return (
    <Swiper
        spaceBetween={30}
        effect={'fade'}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination, Autoplay]}
      slidesPerView={1}
      loop={true}
      autoplay={{
        delay: 3500,
        disableOnInteraction: false,
      }}
      className="w-screen"
    >
      {banner.map((banr, i) => (
        <SwiperSlide key={i} className="swiperslide">
          <Slider img={banr.image} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Banner;
