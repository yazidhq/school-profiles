import { useParams } from "react-router-dom";
import Image from "../../ui/Image";
import SuperHeading from "../../ui/heading/SuperHeading";
import SubHeading from "../../ui/heading/SubHeading";
import { FaInstagram, FaYoutube, FaFacebook, FaWhatsapp } from "react-icons/fa";
import Sosmed from "../../ui/Sosmed";
import Aos from "../../ui/Aos";

const HeroProfileContainer = () => {
  const { school } = useParams();

  return (
    <div className="row align-items-center">
      <div className="col-lg-6">
        <Aos fade={"fade"} duration={"700"}>
          <Image
            src={`/assets/img-tp/${school === "tirtamulya" ? "tm" : "dw"}.png`}
            classes={"img-fluid"}
          />
        </Aos>
      </div>
      <div className="col-md-5">
        <Aos fade={"fade-right"} duration={"1000"} delay={"200"}>
          <SuperHeading
            firstWord={"Al-Hikmah"}
            secondWord={school.toUpperCase()}
          />
        </Aos>
        <Aos fade={"fade-right"} duration={"1000"} delay={"400"}>
          <SubHeading
            text={
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae autem ducimus laboriosam provident eos minima omnis officiis voluptatum? Nemo voluptates sed, sit ex error incidunt."
            }
          />
        </Aos>
      </div>
      <div className="col-md-1">
        <div className="d-flex flex-column text-end gap-2">
          <Sosmed color={"navy"} icon={<FaInstagram />} />
          <Sosmed color={"navy"} icon={<FaYoutube />} />
          <Sosmed color={"navy"} icon={<FaFacebook />} />
          <Sosmed color={"navy"} icon={<FaWhatsapp />} />
        </div>
      </div>
    </div>
  );
};

export default HeroProfileContainer;
