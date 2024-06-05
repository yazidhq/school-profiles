const IconedButton = ({ styles, text, marginX, icon }) => {
  return (
    <button className={`btn ${styles}`}>
      {text}
      <span className={marginX}></span>
      {icon}
    </button>
  );
};

export default IconedButton;
