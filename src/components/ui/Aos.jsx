const Aos = ({ children, fade, duration, delay }) => {
  return (
    <div data-aos={fade} data-aos-duration={duration} data-aos-delay={delay}>
      {children}
    </div>
  );
};

export default Aos;
