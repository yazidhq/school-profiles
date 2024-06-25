const LinkButton = ({ children, is_active, ...props }) => {
  return (
    <button
      className={`btn btn-link text-dark text-decoration-none ${
        is_active ? "fw-medium" : "text-muted"
      }`}
      {...props}
    >
      {children}
    </button>
  );
};

export default LinkButton;
