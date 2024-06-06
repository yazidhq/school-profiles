import { FaWallet } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import Image from "../../ui/Image";
import SuperHeading from "../../ui/heading/SuperHeading";
import SubHeading from "../../ui/heading/SubHeading";
import IconedButton from "../../ui/button/IconedButton";
import Opportunity from "./Opportunity";
import { IoBook } from "react-icons/io5";
import { SiSololearn } from "react-icons/si";
import { AiFillHdd } from "react-icons/ai";
import ImageSlider from "../ImageSlider";

const HeroContainer = () => {
  return (
    <div className="row flex-lg-row-reverse">
      <div className="col-lg-4" data-aos="fade-left" data-aos-duration="1000">
        <div className="lc-block mb-4">
          <ImageSlider />
        </div>
      </div>
      <div className="col-lg-8">
        <div
          className="lc-block mb-4 mt-5"
          data-aos="fade"
          data-aos-duration="2000"
        >
          <SuperHeading
            firstWord={"Secure the Better"}
            secondWord={"Future for your Ward"}
          />
        </div>
        <div className="lc-block mb-4">
          <SubHeading
            text={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid fugit odio accusantium esse amet nostrum labore provident tempore iste necessitatibus."
            }
          />
        </div>
        <div className="d-flex gap-3">
          <div data-aos="fade" data-aos-duration="1500">
            <IconedButton
              styles={"btn-sm btn-navy rounded-5 px-4"}
              text={"Pilih Region"}
              marginX={"mx-2"}
              icon={<FaArrowRightLong />}
            />
          </div>
          <div data-aos="fade" data-aos-duration="3000">
            <IconedButton
              styles={"btn-sm btn-outline-navy rounded-5 px-4"}
              text={"Daftar Sekarang"}
              marginX={"mx-2"}
              icon={<FaArrowRightLong />}
            />
          </div>
        </div>
        <div className="row col-10 row-cols-2 mx-2 mt-5">
          <div data-aos="fade-right" data-aos-duration="2000">
            <Opportunity icon={<FaWallet />} text={"Biaya yang terjangkau"} />
          </div>
          <div data-aos="fade-right" data-aos-duration="1000">
            <Opportunity icon={<IoBook />} text={"Fasilitas Terbaik"} />
          </div>
          <div data-aos="fade-right" data-aos-duration="2500">
            <Opportunity icon={<AiFillHdd />} text={"Program Unggulan"} />
          </div>
          <div data-aos="fade-right" data-aos-duration="1500">
            <Opportunity icon={<SiSololearn />} text={"Kenyamanan Belajar"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroContainer;
