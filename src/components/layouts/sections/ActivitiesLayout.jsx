import { HiOutlineArrowLongRight } from "react-icons/hi2";
import CarouselContainer from "../../container/CarouselContainer";
import Section from "../../container/Section";
import Heading from "../../ui/heading/Heading";
import SubHeading from "../../ui/heading/SubHeading";
import Anchor from "../../ui/text/Anchor";

const ActivitiesLayout = () => {
  return (
    <Section color={"dark"}>
      <div className="row text-white">
        <div className="col-md-3">
          <div className="d-flex justify-content-between">
            <Heading text={"Kegiatan Siswa"} color={"white"} />
          </div>
          <SubHeading
            text={
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At iusto voluptatibus nulla similique possimus ullam neque fuga nesciunt unde nisi id, labore qui? Dolor, natus."
            }
            addOn={"fs-6"}
          />
        </div>
        <div className="col-md-9">
          <div className="d-flex gap-3">
            <div
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-delay="50"
            >
              <CarouselContainer
                imgSrc={"/assets/img-hero/4.JPG"}
                title={"Fun Cooking"}
                desc={"Lorem ipsum dolor sit.."}
                route={""}
              />
            </div>
            <div
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-delay="250"
            >
              <CarouselContainer
                imgSrc={"/assets/img-hero/3.jpg"}
                title={"Amazing Adventure"}
                desc={"Lorem ipsum dolor sit.."}
                route={""}
              />
            </div>
            <div
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-delay="500"
            >
              <CarouselContainer
                imgSrc={"/assets/img-hero/7.jpg"}
                title={"Upacara Bendera"}
                desc={"Lorem ipsum dolor sit.."}
                route={""}
              />
            </div>
          </div>
          <div className="mt-4 text-end">
            <Anchor route={""} color={"white"}>
              Lihat selengkapnya
            </Anchor>
            <HiOutlineArrowLongRight className="mx-4" />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default ActivitiesLayout;
