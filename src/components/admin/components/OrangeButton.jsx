const OrangeButton = ({ children, ...props }) => {
  return (
    <button className="btn btn-orange text-white" {...props}>
      {children}
    </button>
  );
};

export default OrangeButton;
