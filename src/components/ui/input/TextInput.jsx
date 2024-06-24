const TextInput = ({ name, type, classes, id, focus, ...props }) => {
  return (
    <input
      name={name}
      type={type}
      className={`form-control ${classes}`}
      id={id}
      autoFocus={focus}
      {...props}
    />
  );
};

export default TextInput;
