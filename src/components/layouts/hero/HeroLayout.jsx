import HeroContainer from "../../container/hero/HeroContainer";

const HeroLayout = () => {
  return (
    <div className="bg-gradient-yellow pb-5">
      <div className="container py-5">
        <div className="row flex-lg-row-reverse">
          <HeroContainer />
        </div>
      </div>
    </div>
  );
};

export default HeroLayout;
