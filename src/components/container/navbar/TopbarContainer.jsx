import { FaInstagram, FaYoutube, FaFacebook, FaWhatsapp } from "react-icons/fa";
import NavbarLayout from "../../layouts/navbar/NavbarLayout";
import Sosmed from "../../ui/Sosmed";

const TopbarContainer = () => {
  return (
    <NavbarLayout bg={"orange"}>
      <div className="d-flex justify-content-end gap-2">
        <Sosmed color={"navy"} icon={<FaInstagram />} />
        <Sosmed color={"navy"} icon={<FaYoutube />} />
        <Sosmed color={"navy"} icon={<FaFacebook />} />
        <Sosmed color={"navy"} icon={<FaWhatsapp />} />
      </div>
    </NavbarLayout>
  );
};

export default TopbarContainer;
