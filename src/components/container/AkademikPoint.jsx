import { useEnterLeaveMouse } from "../../hooks/useMouseEvent";
import Aos from "../ui/Aos";
import SubHeading from "../ui/heading/SubHeading";

const AkademikPoint = ({ icon, text, desc, aos }) => {
  const [handleMouseEnter, handleMoouseLeave, mouseEvent] =
    useEnterLeaveMouse();

  return (
    <div className="text-center">
      <div
        className="col d-flex justify-content-center mb-4"
        onMouseEnter={() => handleMouseEnter("display-1")}
        onMouseLeave={() => handleMoouseLeave("display-2")}
        data-aos={aos}
      >
        <div
          className={`p-large ${
            mouseEvent ? mouseEvent : "display-2"
          } bg-orange rounded-circle d-flex justify-content-center align-items-center`}
          style={{
            width: "100px",
            height: "100px",
            lineHeight: "0",
          }}
        >
          <span className="text-white">{icon}</span>
        </div>
      </div>
      <Aos fade={"fade"}>
        <SubHeading text={text} addOn={"fw-bold"} />
        <SubHeading text={desc} addOn={"fs-6"} />
      </Aos>
    </div>
  );
};

export default AkademikPoint;
