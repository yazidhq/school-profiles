import { Link } from "react-router-dom";

const NavbarList = ({ children, href, is_active }) => {
  return (
    <li className="nav-item">
      <Link
        to={href}
        className={`nav-link ${is_active ? "active fw-medium" : ""}`}
        style={{ marginRight: "1rem" }}
      >
        {children}
      </Link>
    </li>
  );
};

export default NavbarList;
