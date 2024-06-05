import IconedButton from "../../ui/button/IconedButton";

const Opportunity = ({ icon, text }) => {
  return (
    <div className="col">
      <div className="d-flex align-items-center mb-2 gap-3">
        <div className="flex-shrink-0">
          <IconedButton
            styles={"btn btn-orange text-white rounded-3"}
            icon={icon}
          />
        </div>
        <div className="flex-grow-1 fw-medium text-muted">{text}</div>
      </div>
    </div>
  );
};

export default Opportunity;
