import { FaInstagram, FaYoutube, FaFacebook, FaWhatsapp } from "react-icons/fa";
import Sosmed from "../../ui/Sosmed";

const FooterTopContainer = () => {
  return (
    <div className="border-bottom border-white">
      <div className="container pt-3">
        <div className="d-flex justify-content-between">
          <div>
            <p className="fw-bold">
              Alhikmah Tirtamulya <span className="mx-3">|</span> Alhikmah
              Dawuan
            </p>
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
