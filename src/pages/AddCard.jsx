import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { addNewCard } from "../redux/CardSlice";
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
    if (creditCard.infoCard.length <= 3) {
      dispatch(addNewCard(values));
      setValues(cardData);
      console.log(creditCard.infoCard);
    } else {
      alert("Max limit");
    }
  };

  return (
    <div>
      <div className="card_div">
        <div className="credit-card__logo">{values.bankName}</div>
        <div className="credit-card__number">{values.cardNumber}</div>
        <div className="credit-card__info_label">CARDHOLDER'S NAME</div>
        <div value={values.cardName}>{values.cardName}</div>
        <form className="credit-card__VALID">
          <div>
            M/Y {values.cardMonth} / {values.cardYear}
          </div>
        </form>
        <div className="credit-ccv"> CVG {values.ccv}</div>
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
