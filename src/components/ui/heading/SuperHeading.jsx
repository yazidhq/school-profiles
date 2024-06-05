const SuperHeading = ({ firstWord, secondWord }) => {
  return (
    <div editable="rich">
      <h1 className="rfs-30 fw-bold">
        {firstWord} <br />{" "}
        <span>
          <strong className="text-navy">{secondWord}</strong>
        </span>
      </h1>
    </div>
  );
};

export default SuperHeading;
