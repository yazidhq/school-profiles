const Button = ({ children, style, buttonClick = () => {} }) => {
  return (
    <button className={`btn btn-${style} p-0`} onClick={buttonClick}>
      {children}
    </button>
  );
};

export default Button;
