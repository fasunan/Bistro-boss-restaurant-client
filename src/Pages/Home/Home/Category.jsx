import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import slide1 from "../../../../public/assets/home/slide1.jpg";
import slide2 from "../../../../public/assets/home/slide2.jpg";
import slide3 from "../../../../public/assets/home/slide3.jpg";
import slide4 from "../../../../public/assets/home/slide4.jpg";
import slide5 from "../../../../public/assets/home/slide5.jpg";
import SecTionTitle from "../../../Components/SectionTitle/SecTionTitle";

const Category = () => {
  return (
    <section>
      <SecTionTitle
        subHeading={"From 11:00am to 10:00pm"}
        heading={"ORDER ONLINE"}
      ></SecTionTitle>
      <Swiper
        slidesPerView={4}
        centeredSlides={true}
        spaceBetween={30}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-24"
      >
        <SwiperSlide>
          <img src={slide1} alt="" />
          <h3 className="text-white text-3xl uppercase -mt-16 text-center">
            salad
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} alt="" />
          <h3 className="text-white text-3xl uppercase -mt-16 text-center">
            pizza
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} alt="" />
          <h3 className="text-white text-3xl uppercase -mt-16 text-center">
            soup
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide4} alt="" />
          <h3 className="text-white text-3xl uppercase -mt-16 text-center">
            deserts
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide5} alt="" />
          <h3 className="text-white text-3xl uppercase -mt-16 text-center">
            salad
          </h3>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Category;
