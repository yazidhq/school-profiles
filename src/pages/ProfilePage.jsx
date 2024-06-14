import { useParams } from "react-router-dom";
import HeroLayout from "../components/layouts/hero/HeroLayout";
import SuperNavbarLayout from "../components/layouts/navbar/SuperNavbarLayout";

const ProfilePage = () => {
  const { school } = useParams();

  return (
    <section>
      <SuperNavbarLayout />
      <HeroLayout school={school} />
      <marquee behavior="" className="bg-navy text-white py-1">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero ab
        libero, quia modi iure nisi deleniti veritatis provident fugiat itaque!
      </marquee>
    </section>
  );
};

export default ProfilePage;
