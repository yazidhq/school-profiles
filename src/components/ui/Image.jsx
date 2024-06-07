const Image = ({ src, classes, mouseEnter, mouseLeave }) => {
  return (
    <img
      src={src}
      className={classes}
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseLeave}
    ></img>
  );
};

export default Image;
