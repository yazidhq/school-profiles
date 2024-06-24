const Heading = ({ text, color, size }) => {
  return (
    <p className={`text-${color} fw-bold fs-${size} mb-3`}>
      <strong>{text}</strong>
    </p>
  );
};

export default Heading;
