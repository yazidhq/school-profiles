const TextLabel = ({ text, children, forId, classes, ...props }) => {
  return (
    <label htmlFor={forId} className={`form-label ${classes}`} {...props}>
      {text ? text : children}
    </label>
  );
};

export default TextLabel;
