import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";

const cardData = {
  cardName: "",
  cardNumber: "",
  cardMonth: "",
  cardYear: "",
  ccv: "",
  bankName: "",
};
export const AddCard = () => {
  const creditCard = useSelector((state) => state.cardInfo);
  const dispatch = useDispatch();
  const [values, setValues] = useState(cardData);
  const handleChange = (e) => {
    const nextCard = {
      ...values,
      [e.target.name]: e.target.value,
    };
    setValues(nextCard);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <small>NEW CARD</small>

      <div className="credit-card">
        <div className="credit-card__logo">{values.bankName}</div>

        <div className="credit-card__number">{values.cardNumber}</div>
        <span className="credit-ccv">{values.ccv}</span>
        <div className="credit-card__info">
          <div className="credit-card__info_name">
            <div className="credit-card__info_label">CARDHOLDER'S NAME</div>
            <div value={values.cardName}>{values.cardName}</div>
          </div>

          <div className="credit-card__info_expiry">
            <div className="credit-card__info_label">VALID UP TO</div>
            <div>
              {" "}
              {values.cardMonth} / {values.cardYear}
            </div>
          </div>
        </div>
      </div>
      <div>
        <form className="label_card" onSubmit={handleSubmit}>
          <h2>Add Card</h2>
          <label>
            <input
              type="text"
              name="cardName"
              value={values.cardName}
              onChange={handleChange}
              placeholder="Name"
            />
          </label>
          <label>
            <input
              type="number"
              name="cardNumber"
              maxLength="16"
              onChange={handleChange}
              placeholder="XXXX XXXX XXXX XXXX"
            />
          </label>
          <strong> Expiration Date</strong>
          <label>
            <input
              type="number"
              name="cardYear"
              maxLength="2"
              onChange={handleChange}
              placeholder="Year"
            />
          </label>
          <label>
            <input
              type="number"
              name="cardMonth"
              maxLength="2"
              onChange={handleChange}
              placeholder=" Month"
            />
          </label>
          <label>
            <input
              type="number"
              name="ccv"
              maxLength="3"
              onChange={handleChange}
              placeholder="CCV"
            />
          </label>
          <label htmlFor="">Vendor</label>
          <select name="bankName" onChange={handleChange}>
            <option value="American express">American express</option>
            <option value="visa">Visa</option>
            <option value="mastercard">Mastercard</option>
          </select>
          <div>
            <button>Submit</button>
            <Link to="/">
              <button>Go Back</button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCard;
