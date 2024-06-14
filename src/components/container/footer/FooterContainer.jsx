import Logo from "../../ui/Logo";
import SubHeading from "../../ui/heading/SubHeading";
import SuperHeading from "../../ui/heading/SuperHeading";

const FooterContainer = () => {
  return (
    <div className="container p-5">
      <div className="d-flex gap-2 align-items-center justify-content-center">
        <Logo width={"100px"} />
        <SuperHeading firstWord={"Yayasan"} secondWord={"Al-Hikmah"} />
      </div>
      <div className="container pt-4">
        <div className="row row-cols-md-2">
          <div className="col">
            <SubHeading
              text={"Al-Hikmah Tirtamulya"}
              addOn={"fw-bold fs-6 mb-0 text-end"}
            />
            <SubHeading
              text={
                "Jl, Raya Pasir Malang, RT.001/RW.02, Citarik, Kec. Tirtamulya, Karawang, Jawa Barat 41372, Indonesia"
              }
              addOn={"fw-bold fs-6 text-end"}
            />
          </div>
          <div className="col">
            <SubHeading
              text={"Al-Hikmah  Dawuan"}
              addOn={"fw-bold fs-6 mb-0"}
            />
            <SubHeading
              text={
                "Jl. Jend. Ahmad Yani No.18, Dawuan Tengah, Kec. Cikampek, Karawang, Jawa Barat 41373, Indonesia"
              }
              addOn={"fw-bold fs-6"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterContainer;
