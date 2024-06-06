const Section = ({ color, children }) => {
  return (
    <div className={`bg-${color}`}>
      <div className="container py-5">{children}</div>
    </div>
  );
};

export default Section;
