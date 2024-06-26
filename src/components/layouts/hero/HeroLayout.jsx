import HeroContainer from "../../container/hero/HeroContainer";

const HeroLayout = () => {
  return (
    <div className={`bg-gradient-yellow pb-5`}>
      <div className={`container py-5`}>
        <HeroContainer />
      </div>
    </div>
  );
};

export default HeroLayout;
