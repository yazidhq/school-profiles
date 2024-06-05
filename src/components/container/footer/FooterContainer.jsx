import Logo from "../../ui/Logo";
import SuperHeading from "../../ui/heading/SuperHeading";

const FooterContainer = () => {
  return (
    <div className="row">
      <div className="col-md-6">
        <div className="d-flex gap-4 align-items-center">
          <Logo width={"150px"} />
          <SuperHeading firstWord={"Yayasan"} secondWord={"Al-Hikmah"} />
        </div>
      </div>
    </div>
  );
};

export default FooterContainer;
