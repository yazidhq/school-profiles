import { FaRegPaperPlane } from "react-icons/fa";
import List from "../../ui/list/List";
import IconedButton from "../../ui/button/IconedButton";

const NavbarList = () => {
  return (
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <List />
      </ul>
      <span className="navbar-text">
        <IconedButton
          styles={"btn-sm btn-navy rounded-5 px-4"}
          text={"Pendaftaran Siswa Baru"}
          marginX={"mx-2"}
          icon={<FaRegPaperPlane />}
        />
      </span>
    </div>
  );
};

export default NavbarList;
