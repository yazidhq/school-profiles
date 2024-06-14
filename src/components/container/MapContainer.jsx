import SubHeading from "../ui/heading/SubHeading";

const MapContainer = ({ school, children }) => {
  return (
    <>
      <SubHeading text={school} addOn={"fw-medium"} />
      <div className="d-grid">
        <div className="shadow-sm">{children}</div>
      </div>
    </>
  );
};

export default MapContainer;
