import Logo from "./Logo";

const NavbarBrand = () => {
  return (
    <a className="navbar-brand" href="#">
      <Logo width={"40px"} />
      <span className="fw-bold text-navy mx-2">Yayasan Al-Hikmah</span>
    </a>
  );
};

export default NavbarBrand;
