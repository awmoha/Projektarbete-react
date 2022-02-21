import React from "react";
import { deletCard } from "../redux/cardSlice";
import { useSelector, useDispatch } from "react-redux";

function NotActiveCard({ creditList }) {
  const dispatch = useDispatch();
  const handleDeleteTodo = (id) => {
    dispatch(deletCard(id));
  };
  return creditList.isActive === true ? (
    <div></div>
  ) : (
    <div className="card">
      <div className="card_orginal">
        <div className="credit-card__logo">{creditList.bankName}</div>
        <div className="credit-card__number">{creditList.cardNumber}</div>
        <span className="credit-ccv">{creditList.ccv}</span>
        <div className="credit-card__name">CARDHOLDER'S NAME</div>
        <div className="credit-card__name" value={creditList.cardName}>
          {creditList.cardName}
        </div>
        <div className="credit-card__info_label">
          VALID UP TO {creditList.cardMonth} / {creditList.cardYear}
        </div>
      </div>
      <div>
        <button
          style={{marginTop:"15px"}}
          onClick={() => {
            handleDeleteTodo(creditList.id);
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default NotActiveCard;
