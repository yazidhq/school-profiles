import SubHeading from "./heading/SubHeading";

const CarouselCaption = ({ title, desc }) => {
  return (
    <div className="carousel-caption d-none d-md-block text-white">
      <SubHeading text={title} addOn={"fw-bold fs-6 mb-0 bg-navy pt-1"} />
      <SubHeading text={desc} addOn={"fs-6 mt-0 bg-navy pb-1"} />
    </div>
  );
};

export default CarouselCaption;
