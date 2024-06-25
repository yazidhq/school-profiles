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
            <NavbarList href={"/admin"}>Unit</NavbarList>
            <NavbarList href={"/admin"}>Sarana & Prasarana</NavbarList>
            <NavbarList href={"/admin"}>Ekstrakurikuler</NavbarList>
            <NavbarList href={"/admin"}>Hari Besar</NavbarList>
            <NavbarList href={"/admin"}>
              Kegiatan Belajar dan Mengajar
            </NavbarList>
            <NavbarList href={"/admin"}>Prestasi Siswa</NavbarList>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
