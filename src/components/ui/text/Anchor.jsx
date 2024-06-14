import { Link } from "react-router-dom";

const Anchor = ({ route, children, color }) => {
  return (
    <Link to={route} className={`text-decoration-none text-${color}`}>
      {children}
    </Link>
  );
};

export default Anchor;
