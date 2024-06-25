import Heading from "../../ui/heading/Heading";
import Section from "../../container/Section";
import Description from "../../ui/text/Description";
import Aos from "../../ui/Aos";

const VisiMisiLayout = () => {
  return (
    <Section color={"light"}>
      <div className="text-center">
        <div className="row">
          <div className="col-lg-6">
            <Aos fade={"fade-left"}>
              <Heading text={"Visi"} color={"dark"} size={"1"} />
              <Description
                text={
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias deleniti ipsa modi voluptate exercitationem labore corporis velit inventore minima? Natus impedit cumque quasi vero! Molestias?"
                }
              />
            </Aos>
          </div>
          <div className="col-lg-6">
            <Aos fade={"fade-right"}>
              <Heading text={"Misi"} color={"dark"} size={"1"} />
              <Description
                text={
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias deleniti ipsa modi voluptate exercitationem labore corporis velit inventore minima? Natus impedit cumque quasi vero! Molestias?"
                }
              />
            </Aos>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default VisiMisiLayout;
