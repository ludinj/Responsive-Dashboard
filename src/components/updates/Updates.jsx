import React from "react";
import "./updates.css";
import { UpdatesData } from "../../Data/Data";
const Updates = () => {
  return (
    <div className="updates">
      {UpdatesData.map((update, i) => {
        return (
          <div className="update" key={i}>
            <img src={update.img} alt="" />
            <div className="noti">
              <div style={{ marginBottom: "0.5rem" }}>
                <span>{update.name}</span>
                <span> {update.noti}</span>
              </div>
              <span>{update.time}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Updates;
