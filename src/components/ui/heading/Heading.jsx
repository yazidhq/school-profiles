const Heading = ({ text, color }) => {
  return (
    <p className={`text-${color} fw-bold fs-2 mb-3`}>
      <strong>{text}</strong>
    </p>
  );
};

export default Heading;
