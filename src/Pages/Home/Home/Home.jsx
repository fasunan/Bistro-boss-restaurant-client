import Banner from "../Banner/Banner";
import Testimonial from "../Testimonial/Testimonial";
import Category from "./Category";
import Featured from "./Featured/Featured";
import PopularMenu from "./PopularMenu/PopularMenu";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Category></Category>
      <PopularMenu></PopularMenu>
      <Featured></Featured>
      <Testimonial></Testimonial>
    </div>
  );
};

export default Home;
