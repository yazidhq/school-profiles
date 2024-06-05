import { FaMedal } from "react-icons/fa";
import { SiElectronbuilder } from "react-icons/si";
import { GiExtraTime } from "react-icons/gi";
import SuperCardContainer from "../../container/card/SuperCardContainer";

const SuperCardLayout = () => {
  return (
    <div className="container" style={{ marginTop: "-5%" }}>
      <div className="card-group">
        <SuperCardContainer
          icon={<SiElectronbuilder />}
          title={"Fasilitas Kami"}
          bg={"navy"}
        />
        <SuperCardContainer
          icon={<GiExtraTime />}
          title={"Ekstrakurikuler"}
          bg={"light-navy"}
        />
        <SuperCardContainer icon={<FaMedal />} title={"Prestasi"} bg={"navy"} />
      </div>
    </div>
  );
};

export default SuperCardLayout;
