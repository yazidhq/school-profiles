const IconedButton = ({ styles, text, marginX, icon, dropdown, children }) => {
  return (
    <>
      {dropdown ? (
        <div className="btn-group dropend border-white">
          <button
            className={`btn ${styles}`}
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {text}
            <span className={marginX}></span>
            {icon}
          </button>
          <ul className="dropdown-menu">{children}</ul>
        </div>
      ) : (
        <button className={`btn ${styles}`}>
          {text}
          <span className={marginX}></span>
          {icon}
        </button>
      )}
    </>
  );
};

export default IconedButton;
