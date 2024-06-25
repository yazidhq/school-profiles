const DropdownList = ({ href, children, is_button, ...props }) => {
  return (
    <li>
      {is_button ? (
        <button
          className="dropdown-item btn btn-link text-decoration-none text-dark"
          {...props}
        >
          {children}
        </button>
      ) : (
        <a className="dropdown-item" href={href} {...props}>
          {children}
        </a>
      )}
    </li>
  );
};

export default DropdownList;
