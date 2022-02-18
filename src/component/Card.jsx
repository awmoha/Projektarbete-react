import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
function Card() {
  const creditCard = useSelector((state) => state.cardInfo);
  const [state, setState] = useState(creditCard);
  const toggleActive = (index) => {
    setState({ ...state, activeObject: state.infoCard[index] });
  };

  const activeCard = state.infoCard[state.activeObject];

  const inactiveCards = state.infoCard.filter((c, index) => {
    return state.activeObject !== index;
  });

  const allCards = [activeCard, ...inactiveCards].filter(Boolean);
  const toggleActiveStyle = (index) => {
    if (state.infoCard[index] === state.activeObject) {
      return "active";
    } else {
      return "inactive";
    }
  };
  return (
    <div className="card_div">
     
    </div>
  );
}

export default Card;
