import { useEffect, useState } from "react";
import SecTionTitle from "../../../Components/SectionTitle/SecTionTitle";
import Rating from "react-rating";
import { BiSolidQuoteLeft } from "react-icons/bi";
// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const Testimonial = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <section className="my-10">
      <SecTionTitle
        heading={"TESTIMONIALS"}
        subHeading={"What Our Clients Say"}
      ></SecTionTitle>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {reviews.map((review) => (
          <SwiperSlide key={review._id}>
            <div className="text-center m-20 space-y-3">
              {/* <h2 className="text-3xl text-[#CD9003]">{review.rating}</h2> */}
              <Rating
                initialRating={review.rating}
                emptySymbol={<span className="text-gray-300 text-3xl">☆</span>}
                fullSymbol={<span className="text-[#CD9003] text-3xl">★</span>}
                readonly={true}
              />
              <p className="text-5xl flex items-center justify-center">
                <BiSolidQuoteLeft></BiSolidQuoteLeft>
              </p>
              <p>{review.details}</p>
              <h3 className="text-2xl text-[#CD9003]">{review.name}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonial;
