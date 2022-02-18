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
  // console.log("inactive", inactiveCards);
  // console.log("active", activeCard, state.activeObject);
  const toggleActiveStyle = (index) => {
    if (state.infoCard[index] === state.activeObject) {
      return "active";
    } else {
      return "inactive";
    }
  };
  return (
    <div className="card_div">
      {allCards.map((credit, index) => {
        return (
          <div
            key={index}
            className={toggleActiveStyle(index)}
            onClick={() => {
              toggleActive(index);
            }}
          >
            <div className="credit-card__logo">{credit.bankName}</div>
            <div className="credit-card__number">{credit.cardNumber}</div>
            <span className="credit-ccv">{credit.ccv}</span>
            <div className="credit-card__info_label">CARDHOLDER'S NAME</div>
            <div value={credit.cardName}>{credit.cardName}</div>
            <div className="credit-card__info_label">VALID UP TO</div>
            <div>
              {" "}
              {credit.cardMonth} / {credit.cardYear}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Card;
