const SecTionTitle = ({ heading, subHeading }) => {
  return (
    <div className="mx-auto text-center md:w-4/12 my-8 mt-5">
      <p className="text-[#D99904] mb-2">--- {subHeading} ---</p>
      <h2 className="text-3xl uppercase border-y-4 py-4">{heading}</h2>
    </div>
  );
};

export default SecTionTitle;
