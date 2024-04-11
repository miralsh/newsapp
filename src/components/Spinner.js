import React, { Component } from "react";
import loading from "./__Iphone-spinner-1.gif";

export class Spinner extends Component {
  render() {
    return (
      <div className="text-center">
        <img
          src={loading}
          alt={loading}
          style={{ width: "40px", height: "40px" }}
        />
      </div>
    );
  }
}

export default Spinner;
