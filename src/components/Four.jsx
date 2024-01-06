import React from "react";
import Card from "./Card";
import data from "./data";

export default function Four() {
  return (
    <div className="wrap">
      {data.map((card) => (
        <Card
          key={card.id}
          title={card.title}
          description={card.description}
          icon={card.icon}
          color={card.color}
        />
      ))}
    </div>
  );
}
