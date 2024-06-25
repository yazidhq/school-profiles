const Logo = ({ width, is_admin }) => {
  return (
    <img
      src="/logo.png"
      alt="tirtamulya"
      className={`img-fluid ${is_admin ? "mx-2" : "mx-3"}`}
      width={width}
    />
  );
};

export default Logo;
