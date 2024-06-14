import { useParams } from "react-router-dom";
import HeroContainer from "../../container/hero/HeroContainer";
import HeroProfileContainer from "../../container/hero/HeroProfileContainer";

const HeroLayout = () => {
  const { school } = useParams();

  return (
    <div className={`bg-gradient-yellow ${school ? "" : "pb-5"}`}>
      <div className={`container ${school ? "pt-5" : "py-5"}`}>
        {school ? <HeroProfileContainer school={school} /> : <HeroContainer />}
      </div>
    </div>
  );
};

export default HeroLayout;
