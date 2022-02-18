import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Card from "./Card"
function CardInfo() {
  const dispatch = useDispatch();
  const { infoCard } = useSelector((state) => state.cardInfo);
  return (
    <div>
      {infoCard.map((card, i) => (
        <Card key={i} card={card} />
      ))}
    </div>
  );
}

export default CardInfo;
