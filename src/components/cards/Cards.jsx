import React from "react";
import "./cards.css";
import Card from "../card/Card";
import { cardsData } from "../../Data/Data";
const Cards = () => {
  return (
    <div className="cards">
      {cardsData.map((card, i) => {
        return (
          <div className="parentContainer" key={i}>
            <Card
              title={card.title}
              color={card.color}
              barValue={card.barValue}
              value={card.value}
              png={card.png}
              series={card.series}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
