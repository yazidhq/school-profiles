import Section from "../../container/Section";
import Heading from "../../ui/heading/Heading";
import { FaQuestionCircle } from "react-icons/fa";
import { RiBuilding2Fill } from "react-icons/ri";
import Description from "../../ui/text/Description";
import { FaBookAtlas } from "react-icons/fa6";
import AkademikPoint from "../../container/AkademikPoint";
import Aos from "../../ui/Aos";

const AkademikLayout = () => {
  return (
    <Section color={"white"}>
      <div className="text-center">
        <Aos fade={"fade-up"}>
          <Heading text={"Akademik"} color={"dark"} />
          <Description
            text={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores modi repellendus ipsa nisi eum quo. Nam nulla ipsa ipsum voluptas! Lorem ipsum dolor sit amet consectetur adipisicing elit."
            }
          />
        </Aos>
        <div className="row row-cols-md-3 mt-5">
          <AkademikPoint
            icon={<FaQuestionCircle />}
            text={"Kenapa Al-Hikmah"}
            desc={
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium consequuntur ad dicta. Cum, quo maiores!"
            }
            aos="fade-left"
          />
          <AkademikPoint
            icon={<RiBuilding2Fill />}
            text={"Tentang Sekolah"}
            desc={
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium consequuntur ad dicta. Cum, quo maiores!"
            }
            aos="fade"
          />
          <AkademikPoint
            icon={<FaBookAtlas />}
            text={"Pembelajaran"}
            desc={
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium consequuntur ad dicta. Cum, quo maiores!"
            }
            aos="fade-right"
          />
        </div>
      </div>
    </Section>
  );
};

export default AkademikLayout;
