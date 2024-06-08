import { FaInstagram, FaYoutube, FaFacebook, FaWhatsapp } from "react-icons/fa";
import Sosmed from "../../ui/Sosmed";

const FooterTopContainer = () => {
  return (
    <div className="border-bottom border-white">
      <div className="container pt-3">
        <div className="d-flex justify-content-between">
          <div className="d-flex gap-4">
            <p className="fw-bold">Unit Tirtamulya</p>
            <span>|</span>
            <p className="fw-bold">Unit Dawuan</p>
          </div>
          <div className="d-flex gap-4">
            <Sosmed color={"navy"} icon={<FaInstagram />} />
            <Sosmed color={"navy"} icon={<FaYoutube />} />
            <Sosmed color={"navy"} icon={<FaFacebook />} />
            <Sosmed color={"navy"} icon={<FaWhatsapp />} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterTopContainer;
