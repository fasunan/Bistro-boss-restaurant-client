import SecTionTitle from "../../../../Components/SectionTitle/SecTionTitle";
import img from "../../../../../public/assets/home/featured.jpg";

const Featured = () => {
  return (
    <section
      style={{ backgroundImage: `url(${img})` }}
      className="mb-12 text-white pt-5 bg-fixed"
    >
      <SecTionTitle
        heading={"FROM OUR MENU"}
        subHeading={"Check it out"}
      ></SecTionTitle>
      <div className="md:flex items-center justify-center py-20 px-36 bg-opacity-60 bg-black">
        <div>
          <img src={img} alt="" />
        </div>
        <div className="md:ml-10">
          <p>March 20, 2023</p>
          <p>WHERE CAN I GET SOME?</p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos
            maiores consequuntur libero rerum aperiam magnam et vitae? Iusto et
            ab quis sint harum tempore perferendis quibusdam eveniet. Illo,
            distinctio eligendi.
          </p>
          <button className="btn btn-outline border-0 border-b-4 text-white">
            Order Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Featured;
