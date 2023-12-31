import SecTionTitle from "../../../../Components/SectionTitle/SecTionTitle";
import MenuItem from "../../../Shared/MenuItem/MenuItem";
import useMenu from "../../../../hooks/useMenu";

const PopularMenu = () => {
  const [menu]= useMenu();
  const popularItems = menu.filter((item) => item.category === "popular");
  
  return (
    <section className="mb-12">
      <SecTionTitle
        heading={"FROM OUR MENU"}
        subHeading={"Check it out"}
      ></SecTionTitle>
      <div className="grid md:grid-cols-2 gap-10">
        {popularItems.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <div className="mt-10 flex  items-center justify-center">
        <button className="btn btn-outline border-0 border-b-4 text-black ">
          View Full Menu
        </button>
      </div>
      <div className=" bg-black h-64 flex items-center justify-center mt-8">
        <p className="text-white font-medium text-2xl text-center p-10">
          Call Us: +88 0192345678910
        </p>
      </div>
    </section>
  );
};

export default PopularMenu;
