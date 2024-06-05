import NavbarLayout from "../../layouts/navbar/NavbarLayout";
import NavbarBrand from "../../ui/NavbarBrand";
import HamburgerButton from "../../ui/button/HamburgerButton";
import NavbarList from "./NavbarList";

const NavbarContainer = () => {
  return (
    <NavbarLayout bg={"white"} addOn={"shadow-sm"}>
      <NavbarBrand />
      <HamburgerButton />
      <NavbarList />
    </NavbarLayout>
  );
};

export default NavbarContainer;
