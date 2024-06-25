import { Link } from "react-router-dom";

const List = ({ text }) => {
  return (
    <li className="nav-item">
      <Link className="nav-link active" aria-current="page" to="#">
        {text}
      </Link>
    </li>
  );
};

export default List;
