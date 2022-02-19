import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
function Card() {
  const creditCard = useSelector((state) => state.cardInfo);
  const [state, setState] = useState(creditCard);
  
  const activeCard = state.infoCard[state.activeObject];

  const inactiveCards = state.infoCard.filter((c, index) => {
    return state.activeObject !== index;
  });

  const allCards = [activeCard, ...inactiveCards].filter(Boolean);


  return (
    <div className="card">
      {allCards.map((credit, index) => {
        return (
          <div className="card_orginal">
            <div className="credit-card__logo">{credit.bankName}</div>
            <div className="credit-card__number">{credit.cardNumber}</div>
            <span className="credit-ccv">{credit.ccv}</span>
            <div className="credit-card__name">CARDHOLDER'S NAME</div>
            <div className="credit-card__name" value={credit.cardName}>{credit.cardName}</div>
            <div className="credit-card__info_label">VALID UP TO
          
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
