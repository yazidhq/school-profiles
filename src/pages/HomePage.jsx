import HeroLayout from "../components/layouts/hero/HeroLayout";
import SuperCardLayout from "../components/layouts/card/SuperCardLayout";
import SuperNavbarLayout from "../components/layouts/navbar/SuperNavbarLayout";
import FooterLayout from "../components/layouts/footer/FooterLayout";

const HomePage = () => {
  return (
    <section>
      <SuperNavbarLayout />
      <HeroLayout />
      <SuperCardLayout />
      <FooterLayout />
    </section>
  );
};

export default HomePage;
