import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import Logo from "../../ui/Logo";
import Button from "../../ui/button/Button";
import { useMouseClick } from "../../../hooks/useMouseEvent";
import OpenMenu from "./OpenMenu";
import Anchor from "../../ui/text/Anchor";

const NavbarBrand = () => {
  const [handleMouseClick, mouseEvent] = useMouseClick();

  return (
    <>
      <section>
        <Button
          style={"link text-dark btn-lg mb-1"}
          buttonClick={handleMouseClick}
        >
          {!mouseEvent ? <GiHamburgerMenu /> : <AiOutlineClose />}
        </Button>
        <Anchor route={"/"} color={"navbar-brand"}>
          <Logo width={"40px"} />
          <span className="fw-bold text-navy">Yayasan Al-Hikmah</span>
        </Anchor>
      </section>
      {mouseEvent && <OpenMenu handleMouseClick={handleMouseClick} />}
    </>
  );
};

export default NavbarBrand;
