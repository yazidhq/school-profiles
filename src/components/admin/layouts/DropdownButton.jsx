const DropdownButton = ({ text, children }) => {
  return (
    <div className="dropdown">
      <button
        className="btn btn-outline-dark btn-sm dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {text}
      </button>
      <ul className="dropdown-menu">{children}</ul>
    </div>
  );
};

export default DropdownButton;
