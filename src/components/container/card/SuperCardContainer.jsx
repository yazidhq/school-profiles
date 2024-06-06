import Image from "../../ui/Image";

const SuperCardContainer = ({ route, icon, title, bg }) => {
  return (
    <div className="card rounded-0 border-0 text-white">
      <a href={route} className="text-decoration-none text-white">
        <div className={`card-body bg-${bg} p-4 py-5 text-center`}>
          <h5 className="card-title">
            <span className="fs-1">{icon}</span>
            <span className="mx-2"></span>
            {title}
          </h5>
        </div>
      </a>
    </div>
  );
};

export default SuperCardContainer;
