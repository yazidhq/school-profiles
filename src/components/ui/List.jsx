const List = ({ text }) => {
  return (
    <li className="nav-item">
      <a className="nav-link active" aria-current="page" href="#">
        {text}
      </a>
    </li>
  );
};

export default List;
