import SubHeading from "../ui/heading/SubHeading";

const AkademikPoint = ({ icon, text, desc }) => {
  return (
    <div>
      <div className="col d-flex justify-content-center mb-4">
        <div
          className="p-large bg-orange rounded-circle d-flex justify-content-center align-items-center"
          style={{ width: "100px", height: "100px" }}
        >
          <span className="text-white display-1">{icon}</span>
        </div>
      </div>
      <SubHeading text={text} addOn={"fw-bold"} />
      <SubHeading text={desc} addOn={"fs-6"} />
    </div>
  );
};

export default AkademikPoint;
