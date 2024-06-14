import { useParams } from "react-router-dom";
import HeroLayout from "../components/layouts/hero/HeroLayout";
import SuperNavbarLayout from "../components/layouts/navbar/SuperNavbarLayout";
import FooterLayout from "../components/layouts/footer/FooterLayout";
import { useEffect } from "react";

const ProfilePage = () => {
  const { school } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [school]);

  return (
    <section>
      <SuperNavbarLayout />
      <HeroLayout school={school} />
      <marquee behavior="" className="bg-navy text-white py-1">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero ab
        libero, quia modi iure nisi deleniti veritatis provident fugiat itaque!
      </marquee>
      <FooterLayout />
    </section>
  );
};

export default ProfilePage;
