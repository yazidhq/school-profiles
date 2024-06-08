import SubHeading from "../ui/heading/SubHeading";

const MapContainer = ({ unit, children }) => {
  return (
    <>
      <SubHeading text={unit} addOn={"fw-medium"} />
      <div className="d-grid">
        <div className="shadow-sm">{children}</div>
      </div>
    </>
  );
};

export default MapContainer;
