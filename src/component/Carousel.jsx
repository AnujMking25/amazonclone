import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import "swiper/css";
import "swiper/css/navigation";
const Carousel = () => {
  return (
    <div className="h-[600px] bg-white">
      <Swiper
        loop={true}
        spaceBetween={0}
        navigation={true}
        modules={[Navigation,Pagination ,Autoplay]}
        autoplay={{
          delay:4000
        }}
        className="h-[50%]"
      >
        <SwiperSlide>
          <img src={"../images/carousel_1.jpg"} alt="image1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={"../images/carousel_2.jpg"} alt="image2" />
        </SwiperSlide>
        <SwiperSlide className="bg-black">
          <video controls muted="muted">
          <source src={"../images/carousel_vid.mp4"} type="video/mp4"/></video>
        </SwiperSlide>
        <SwiperSlide>
          <img src={"../images/carousel_4.jpg"} alt="image4" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={"../images/carousel_5.jpg"} alt="image5" />
        </SwiperSlide>
      </Swiper>
      <div className="h-[30%] bg-gradient-to-b from-stone-900"/>
    </div>
  );
};

export default Carousel;
