import React from "react";
import loading from "./__Iphone-spinner-1.gif";

const Spinner = () => {
  return (
    <div className="text-center">
      <img
        src={loading}
        alt={loading}
        style={{ width: "40px", height: "40px" }}
      />
    </div>
  );
};

export default Spinner;
