const NavbarLayout = ({ children, bg, addOn }) => {
  return (
    <nav className={`navbar navbar-expand-lg bg-${bg} ${addOn}`}>
      <div className="container">{children}</div>
    </nav>
  );
};

export default NavbarLayout;
