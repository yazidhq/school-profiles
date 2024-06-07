import CarouselCaption from "../ui/CarouselCaption";
import Image from "../ui/Image";
import Anchor from "../ui/text/Anchor";
import { useEnterLeaveMouse } from "../../hooks/useMouseEvent";

const CarouselContainer = ({ imgSrc, title, desc, route }) => {
  const [handleMouseEnter, handleMouseLeave, mouseEvent] = useEnterLeaveMouse();

  return (
    <div className="carousel carousel-dark slide">
      <div className="carousel-inner">
        <Anchor route={route}>
          <div className="carousel-item active">
            <Image
              src={imgSrc}
              classes={`${mouseEvent} img-fluid d-block w-100 carousel-img`}
              mouseEnter={() => handleMouseEnter("opacity-75")}
              mouseLeave={() => handleMouseLeave("opacity-100")}
            />
            <CarouselCaption title={title} desc={desc} />
          </div>
        </Anchor>
      </div>
    </div>
  );
};

export default CarouselContainer;
