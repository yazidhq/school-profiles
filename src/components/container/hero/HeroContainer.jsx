import { FaWallet } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import SuperHeading from "../../ui/heading/SuperHeading";
import SubHeading from "../../ui/heading/SubHeading";
import IconedButton from "../../ui/button/IconedButton";
import Opportunity from "./Opportunity";
import { IoBook } from "react-icons/io5";
import { SiSololearn } from "react-icons/si";
import { AiFillHdd } from "react-icons/ai";
import ImageSlider from "../ImageSlider";
import DropdownList from "../../ui/list/DropdownList";
import Aos from "../../ui/Aos";

const HeroContainer = () => {
  return (
    <div className="row flex-lg-row-reverse">
      <div className="col-lg-4">
        <div className="lc-block mb-4">
          <Aos fade={"fade-left"} duration={"1000"}>
            <ImageSlider />
          </Aos>
        </div>
      </div>
      <div className="col-lg-8">
        <div className="lc-block mb-4 mt-5">
          <Aos fade={"fade"} duration={"2000"}>
            <SuperHeading
              firstWord={"Secure the Better"}
              secondWord={"Future for your Ward"}
            />
          </Aos>
        </div>
        <div className="lc-block mb-4">
          <Aos fade={"fade"}>
            <SubHeading
              text={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid fugit odio accusantium esse amet nostrum labore provident tempore iste necessitatibus."
              }
            />
          </Aos>
        </div>
        <div className="d-flex gap-3">
          <Aos fade={"fade"} duration={"3000"}>
            <IconedButton
              styles={"btn-sm btn-navy rounded-5 px-4"}
              text={"Daftar Sekarang"}
              marginX={"mx-2"}
              icon={<FaArrowRightLong />}
            />
          </Aos>
          <Aos fade={"fade"} duration={"1500"}>
            <IconedButton
              styles={"btn-sm btn-outline-navy rounded-5 px-4"}
              text={"Pilih Unit"}
              marginX={"mx-2"}
              icon={<FaArrowRightLong />}
              dropdown={true}
            >
              <DropdownList route={""}>Al-Hikmah Tirtamulya</DropdownList>
              <DropdownList route={""}>Al-Hikmah Dawuan</DropdownList>
            </IconedButton>
          </Aos>
        </div>
        <div className="row col-12 row-cols-2 mx-2 mt-5">
          <Aos fade={"fade-right"} duration={"2000"}>
            <Opportunity icon={<FaWallet />} text={"Biaya yang terjangkau"} />
          </Aos>
          <Aos fade={"fade-right"} duration={"1000"}>
            <Opportunity icon={<IoBook />} text={"Fasilitas Terbaik"} />
          </Aos>
          <Aos fade={"fade-right"} duration={"2500"}>
            <Opportunity icon={<AiFillHdd />} text={"Program Unggulan"} />
          </Aos>
          <Aos fade={"fade-right"} duration={"1500"}>
            <Opportunity icon={<SiSololearn />} text={"Kenyamanan Belajar"} />
          </Aos>
        </div>
      </div>
    </div>
  );
};

export default HeroContainer;
