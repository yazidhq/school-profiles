import { Link } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";
import Logo from "../../ui/Logo";
import DropdownList from "../components/DropdownList";
import DropdownButton from "./DropdownButton";

const Topbar = () => {
  const { logout } = useAuth();

  return (
    <nav className="bg-white border-bottom py-3">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <Link to="/">
              <Logo width={"40px"} is_admin={true} />
            </Link>
          </div>
          <div className="fw-medium">Yayasan Al-Hikmah</div>
          <div>
            <DropdownButton text={"Admin"}>
              <DropdownList onClick={logout} is_button={true}>
                Logout
              </DropdownList>
            </DropdownButton>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Topbar;
