import React from "react";

const GMaps = ({ source }) => {
  return (
    <div className="gmaps">
      <iframe
        title="Google Map"
        className="iframe"
        src={source}
        allowFullScreen
      />
    </div>
  );
};

export default GMaps;
