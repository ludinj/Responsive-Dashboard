import React from "react";
import "./rightSide.css";
import Updates from "../updates/Updates";
import CustomerReview from "../customerReview/CustomerReview";
const RightSide = () => {
  return (
    <div className="rightSide">
      <div>
        <h3>Updates</h3>
        <Updates />
      </div>
      <div>
        <h3>Customer Review</h3>
        <CustomerReview />
      </div>
    </div>
  );
};

export default RightSide;
