import { GiHamburgerMenu } from "react-icons/gi";
import Logo from "./Logo";
import Button from "./button/Button";
import { useMouseClick } from "../../hooks/useMouseEvent";
import { AiOutlineClose } from "react-icons/ai";

const NavbarBrand = () => {
  const [handleMouseClick, mouseEvent] = useMouseClick();

  return (
    <section>
      <Button
        style={"link text-dark btn-lg mb-1"}
        buttonClick={handleMouseClick}
      >
        {!mouseEvent ? <GiHamburgerMenu /> : <AiOutlineClose />}
      </Button>
      <a className="navbar-brand" href="#">
        <Logo width={"40px"} />
        <span className="fw-bold text-navy">Yayasan Al-Hikmah</span>
      </a>
    </section>
  );
};

export default NavbarBrand;
