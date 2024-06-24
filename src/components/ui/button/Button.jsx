const Button = ({
  children,
  type = "button",
  style,
  buttonClick = () => {},
}) => {
  return (
    <button type={type} className={`btn btn-${style}`} onClick={buttonClick}>
      {children}
    </button>
  );
};

export default Button;
