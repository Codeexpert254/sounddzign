import React from "react";
import "./Info.css";
import { red, info1, info2 } from "../../assets";

const Info = () => {
  return (
    <div className="info-container">
      <div className="info">
        <img src={red} />
      </div>
      <div className="info-content">
        <div className="students">
          <img src={info1} alt="" />
          <h1>23,000+</h1>
          <p>Students</p>
        </div>
        <div className="videos">
          <img src={info2} alt="" />
          <h1>26 Hrs</h1>
          <p>Video Content</p>
        </div>
      </div>
    </div>
  );
};

export default Info;
