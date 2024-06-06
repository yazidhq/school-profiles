import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "../ui/Image";

const imageList = [
  "../../../public/assets/img-hero/1.jpg",
  "../../../public/assets/img-hero/2.jpg",
  "../../../public/assets/img-hero/3.jpg",
  "../../../public/assets/img-hero/4.jpg",
  "../../../public/assets/img-hero/5.jpg",
  "../../../public/assets/img-hero/6.jpg",
  "../../../public/assets/img-hero/7.jpg",
  "../../../public/assets/img-hero/8.jpg",
  "../../../public/assets/img-hero/9.jpg",
];

const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
  };

  return (
    <Slider {...settings}>
      {imageList.map((image, index) => (
        <div key={index} className="img-container">
          <Image
            src={image}
            alt={`Slide ${index}`}
            classes={"img-fluid rounded-3"}
          />
        </div>
      ))}
    </Slider>
  );
};

export default ImageSlider;
