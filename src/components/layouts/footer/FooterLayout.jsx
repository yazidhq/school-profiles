import FooterBotContainer from "../../container/footer/FooterBotContainer";
import FooterContainer from "../../container/footer/FooterContainer";
import FooterTopContainer from "../../container/footer/FooterTopContainer";

const FooterLayout = () => {
  return (
    <div>
      <div className="bg-orange">
        <FooterTopContainer />
        <FooterContainer />
      </div>
      <div className="bg-dark-orange">
        <FooterBotContainer />
      </div>
    </div>
  );
};

export default FooterLayout;
