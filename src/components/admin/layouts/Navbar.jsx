import usePath from "../../../hooks/usePath";
import Hamburger from "../components/Hamburger";
import NavbarList from "../components/NavbarList";

const Navbar = () => {
  const [url] = usePath();

  return (
    <nav className="navbar navbar-expand-lg bg-white shadow-sm">
      <div className="container">
        <Hamburger />
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <NavbarList href={"/admin"} is_active={url === "/admin"}>
              Dashboard
            </NavbarList>
            <NavbarList href={"/yayasan"} is_active={url === "/yayasan"}>
              Yayasan
            </NavbarList>
            <NavbarList href={"/unit"} is_active={url === "/unit"}>
              Unit
            </NavbarList>
            <NavbarList href={"/sarana"} is_active={url === "/sarana"}>
              Sarana & Prasarana
            </NavbarList>
            <NavbarList href={"/ekskul"} is_active={url === "/ekskul"}>
              Ekstrakurikuler
            </NavbarList>
            <NavbarList href={"/hari_besar"} is_active={url === "/hari_besar"}>
              Hari Besar
            </NavbarList>
            <NavbarList href={"/kbm"} is_active={url === "/kbm"}>
              Kegiatan Belajar dan Mengajar
            </NavbarList>
            <NavbarList href={"/prestasi"} is_active={url === "/prestasi"}>
              Prestasi Siswa
            </NavbarList>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
