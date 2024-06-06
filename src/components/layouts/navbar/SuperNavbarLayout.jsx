import { useEffect, useState } from "react";
import NavbarContainer from "../../container/navbar/NavbarContainer";
import TopbarContainer from "../../container/navbar/TopbarContainer";

const SuperNavbarLayout = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section>
      <TopbarContainer />
      <NavbarContainer />
      {scrollY > 40 && <NavbarContainer addOn={scrollY > 40 && "fixed-top"} />}
    </section>
  );
};

export default SuperNavbarLayout;
