import { FaInstagram, FaYoutube, FaFacebook, FaWhatsapp } from "react-icons/fa";
import Sosmed from "../../ui/Sosmed";

const FooterTopContainer = () => {
  return (
    <div className="border-bottom border-white">
      <div className="container py-3">
        <div className="d-flex justify-content-end gap-4">
          <Sosmed color={"navy"} icon={<FaInstagram />} />
          <Sosmed color={"navy"} icon={<FaYoutube />} />
          <Sosmed color={"navy"} icon={<FaFacebook />} />
          <Sosmed color={"navy"} icon={<FaWhatsapp />} />
        </div>
      </div>
    </div>
  );
};

export default FooterTopContainer;
