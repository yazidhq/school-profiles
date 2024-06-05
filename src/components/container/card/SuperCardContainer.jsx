import Image from "../../ui/Image";

const SuperCardContainer = ({ icon, title, bg }) => {
  return (
    <div className="card rounded-0 border-0 text-white">
      <div className={`card-body bg-${bg} p-4 py-5 text-center`}>
        <h5 className="card-title">
          <span className="fs-1">{icon}</span>
          <span className="mx-2"></span>
          {title}
        </h5>
      </div>
      <Image
        src={
          "https://images.unsplash.com/photo-1525004866327-07739b938272?crop=entropy&amp;cs=tinysrgb&amp;fit=crop&amp;fm=jpg&amp;ixid=MnwzNzg0fDB8MXxzZWFyY2h8MTZ8fGJ1aWxkaW5nfGVufDB8Mnx8fDE2MzQ1NTA4MDc&amp;ixlib=rb-1.2.1&amp;q=80&amp;w=1080&amp;h=180"
        }
        classes={"card-img-top"}
      />
    </div>
  );
};

export default SuperCardContainer;
