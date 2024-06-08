import { HiOutlineArrowLongRight } from "react-icons/hi2";
import CarouselContainer from "../../container/CarouselContainer";
import Section from "../../container/Section";
import Heading from "../../ui/heading/Heading";
import SubHeading from "../../ui/heading/SubHeading";
import Anchor from "../../ui/text/Anchor";

const AchievementsLayout = () => {
  return (
    <Section color={"white"}>
      <div className="row">
        <div className="col-md-3 text-justify order-md-2 order-1">
          <div className="d-flex justify-content-between">
            <Heading text={"Prestasi"} />
          </div>
          <SubHeading
            text={
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At iusto voluptatibus nulla similique possimus ullam neque fuga nesciunt unde nisi id, labore qui? Dolor, natus."
            }
            addOn={"fs-6"}
          />
        </div>
        <div className="col-md-9 order-md-1 order-2">
          <div className="d-flex gap-3">
            <div
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-delay="50"
            >
              <CarouselContainer
                imgSrc={"/assets/img-hero/1.jpg"}
                title={"Fun Cooking"}
                desc={"Lorem ipsum dolor sit.."}
                route={""}
              />
            </div>
            <div
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-delay="250"
            >
              <CarouselContainer
                imgSrc={"/assets/img-hero/2.JPG"}
                title={"Amazing Adventure"}
                desc={"Lorem ipsum dolor sit.."}
                route={""}
              />
            </div>
            <div
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-delay="500"
            >
              <CarouselContainer
                imgSrc={"/assets/img-hero/6.jpg"}
                title={"Upacara Bendera"}
                desc={"Lorem ipsum dolor sit.."}
                route={""}
              />
            </div>
          </div>
          <div className="mt-4 text-end">
            <Anchor route={""} color={"dark"}>
              Lihat selengkapnya
            </Anchor>
            <HiOutlineArrowLongRight className="mx-4" />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default AchievementsLayout;
