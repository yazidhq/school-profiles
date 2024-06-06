import HeroLayout from "../components/layouts/hero/HeroLayout";
import SuperCardLayout from "../components/layouts/card/SuperCardLayout";
import SuperNavbarLayout from "../components/layouts/navbar/SuperNavbarLayout";
import FooterLayout from "../components/layouts/footer/FooterLayout";
import VisiMisiLayout from "../components/layouts/sections/VisiMisiLayout";
import AkademikLayout from "../components/layouts/sections/AkademikLayout";

const HomePage = () => {
  return (
    <section>
      <SuperNavbarLayout />
      <HeroLayout />
      <SuperCardLayout />
      <AkademikLayout />
      <VisiMisiLayout />
      <FooterLayout />
    </section>
  );
};

export default HomePage;
