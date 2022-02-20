import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deletCard } from "../redux/cardSlice";
function Card({ credit }) {
  const dispatch = useDispatch();
  const handleDeleteTodo = (id) => {
    dispatch(deletCard(id));
  };
  return (
    <div className="card">
      <div className="card_orginal">
        <div className="credit-card__logo">{credit.bankName}</div>
        <div className="credit-card__number">{credit.cardNumber}</div>
        <img
          src="https://w7.pngwing.com/pngs/460/694/png-transparent-iphone-computer-icons-integrated-circuits-chips-subscriber-identity-module-sim-cards-electronics-text-rectangle.png"
          class="chip"
        />
        <span className="credit-ccv">{credit.ccv}</span>
        <div className="credit-card__name">CARDHOLDER'S NAME</div>
        <div className="credit-card__name">{credit.cardName}</div>
        <div className="credit-card__info_label">
          VALID UP TO {credit.cardMonth} / {credit.cardYear}
        </div>
      </div>
      <div>
        {" "}
        <button
          onClick={() => {
            handleDeleteTodo(credit.id);
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default Card;
