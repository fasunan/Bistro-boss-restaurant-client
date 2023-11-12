const MenuItem = ({ item }) => {
  const { name, image, recipe, price } = item;
  return (
    <div className="flex">
      <img
        style={{ borderRadius: "0 200px 200px 200px" }}
        className="w-[100px]"
        src={image}
        alt=""
      />
      <div className="ml-4">
        <h3 className="uppercase">{name}--------</h3>
        <p>{recipe}</p>
      </div>
      <p className="text-[#BB8506]">${price}</p>
    </div>
  );
};

export default MenuItem;
