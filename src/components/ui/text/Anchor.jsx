const Anchor = ({ route, children, color }) => {
  return (
    <a href={route} className={`text-decoration-none text-${color}`}>
      {children}
    </a>
  );
};

export default Anchor;
