import Heading from "../../ui/heading/Heading";
import Section from "../../container/Section";
import Description from "../../ui/text/Description";

const RegionLayout = () => {
  return (
    <Section color={"whhite"}>
      <div className="text-center">
        <div className="row">
          <div className="col-lg-6">
            <Heading text={"Visi"} color={"orange"} />
            <Description
              text={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias deleniti ipsa modi voluptate exercitationem labore corporis velit inventore minima? Natus impedit cumque quasi vero! Molestias?"
              }
            />
          </div>
          <div className="col-lg-6">
            <Heading text={"Misi"} color={"orange"} />
            <Description
              text={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias deleniti ipsa modi voluptate exercitationem labore corporis velit inventore minima? Natus impedit cumque quasi vero! Molestias?"
              }
            />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default RegionLayout;
