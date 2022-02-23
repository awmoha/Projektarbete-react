import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { addNewCard } from "../redux/cardSlice";
export const AddCard = ({ card }) => {
  const cardData = {
    id: Date.now(),
    cardName: `${card.cardName}`,
    cardNumber: "XXXX XXXX XXXX XXXX",
    cardMonth: "",
    cardYear: "",
    cvv: "",
    bankName: "",
  };
  const { infoCard } = useSelector((state) => state.cardInfo);
  const creditCard = useSelector((state) => state.cardInfo);
  const dispatch = useDispatch();
  const history = useHistory();
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
    history.push("/home");
    if (creditCard.infoCard.length <= 3) {
      dispatch(addNewCard(values));
      setValues(cardData);
    } else {
      alert("Max limit");
    }
  };
  return (
    <div className=" card">
      <div className="card_orginal">
        <div className="credit-card__logo">{values.id}</div>
        <div className="credit-card__logo">{values.bankName}</div>
        <div className="credit-card__number">{values.cardNumber}</div>
        <img
          className="chip"
          src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9Ijc2IiB2aWV3Qm94PSIwIDAgMTAwIDc2IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaWRZTWlkIj48ZGVmcz48bGluZWFyR3JhZGllbnQgeDE9IjEwMCUiIHkxPSIwJSIgeDI9IjAlIiB5Mj0iMTAwJSIgaWQ9ImEiPjxzdG9wIHN0b3AtY29sb3I9IiNGM0QwOEYiIG9mZnNldD0iMCUiLz48c3RvcCBzdG9wLWNvbG9yPSIjRkFENzY2IiBvZmZzZXQ9IjEwMCUiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cGF0aCBkPSJNOTIuNzI3IDc1LjQ1NWgtODUuNDU1Yy00IDAtNy4yNzMtMy4yNzMtNy4yNzMtNy4yNzN2LTYwLjkwOWMwLTQgMy4yNzMtNy4yNzMgNy4yNzMtNy4yNzNoODUuNDU1YzQgMCA3LjI3MyAzLjI3MyA3LjI3MyA3LjI3M3Y2MC45MDljMCA0LTMuMjczIDcuMjczLTcuMjczIDcuMjczIiBmaWxsPSJ1cmwoI2EpIi8+PHBhdGggZD0iTTcyLjEyMyAyOC40ODVoMjcuODc4di0xLjgxOGgtMjkuNjQ4Yy0uOTY1IDAtMS44MzIuNjAxLTIuMTcyIDEuNTA0LTIuMjg3IDYuMDcyLTIuNDMzIDEyLjU5NC0uNDM4IDE5Ljg0Mi40NTUgMS42NTQuNDM1IDMuNC0uMSA1LjAzLTIuMDM2IDYuMTk1LTcuNzc5IDE5Ljk4OC0xOC41NTEgMTkuOTg4LTExLjAwOCAwLTE2LjA5Ni0xNS42OTktMTcuMzM0LTIxLjk1Mi0uMTU1LS43ODQtLjEyMi0xLjU5Mi4xMDctMi4zNTcgMS42OTUtNS42NDggMi4wOTQtMTAuNjQtLjAxNi0xOS41OS0uMjA1LS44Ny0uMTgyLTEuNzgzLjA0OC0yLjY0NiA0LjQ4LTE2Ljc1NSAxMi44ODItMjAuMTQ3IDEyLjk2NS0yMC4xNzkuMzU2LS4xMzIuNTkzLS40NzIuNTkzLS44NTJ2LTUuNDU1aC0xLjgxOHYzLjc3NmMwIC42NS0uMzMyIDEuMjUyLS44ODQgMS41OTYtMi44MDMgMS43NDItOC45MDQgNi45MzYtMTIuNTU3IDIwLjQ1Ni0uMTguNjY4LS43ODEgMS4xMzYtMS40NzMgMS4xMzNsLTI4LjcyMi0uMTM5djEuODE4bDI3LjQxNi4xMzNjMS40NjguMDA3IDIuNzM1IDEuMDQxIDMuMDM3IDIuNDc4IDEuNDE2IDYuNzQxIDEuMjE5IDExLjAzOS4wODIgMTUuNDU4LS4zMTYgMS4yMy0xLjQyIDIuMDk2LTIuNjkgMi4xMDlsLTI3Ljg0NC4yN3YxLjgxOWwyOC42MDUtLjI3OGMuNjkzLS4wMDcgMS4yOTYuNDczIDEuNDM1IDEuMTUyIDEuNDQyIDcuMDQxIDYuODg3IDIzLjA3IDE5LjA1IDIzLjA3IDYuMzY4IDAgMTIuMDYyLTQuMjUgMTYuNDY3LTEyLjI5IDIuNjQ0LTQuODI4IDQuMDY3LTkuNTkxIDQuNTQxLTExLjM0NmgyOS45MDF2LTEuODE4aC0yOC4wMTZjLTEuMTU4IDAtMi4xODMtLjc3Mi0yLjQ4OS0xLjg4OS0xLjY5Mi02LjE2NC0xLjc2MS0xMS43NTUtLjItMTYuOTU5LjM3MS0xLjIzNSAxLjUzOC0yLjA2MSAyLjgyNy0yLjA2MXptLTE3LjE1LTIxLjkxNGMuMDQ1LjAyMiA0LjUxOSAyLjMyMiA5LjI1MyAxMC4wNDEuMTcyLjI4LjQ3LjQzNC43NzYuNDM0LjE5OCAwIC4zOTktLjA2NC41NzEtLjIwMi4zNjUtLjI5Mi40MTYtLjgzNy4xNzItMS4yMzUtMy41Ny01LjgwNS03LjAyNC04LjcxLTguNzc1LTkuOTMxLS40My0uMjk5LS42OC0uNzkyLS42OC0xLjMxNXYtNC4zNjNoLTEuODE4djUuNzU4YzAgLjM0NS4xOTUuNjU5LjUwMi44MTN6IiBmaWxsPSIjMEMwMjAwIi8+PC9zdmc+"
          alt=""
        />
        <div>CARDHOLDER'S NAME</div>
        {<div value={values.cardName}>{values.cardName}</div>}
        <footer>
          <div className="credit-card__info_label">
            M/Y {values.cardMonth} / {values.cardYear}
          </div>
          <div className="credit-ccv"> CVV {values.cvv}</div>
        </footer>
      </div>

      {/* Credit card form */}
      <div>
        <form className="label_card" onSubmit={handleSubmit}>
          <h2>Add Card</h2>
          <label>
            <input
              type="text"
              name="id"
              value={values.id}
              onChange={handleChange}
              placeholder="Enter Your Id"
              disabled="disabled"
              className="input_name"
            />
          </label>
          <label>
            <input
              type="text"
              name="cardName"
              maxLength="20"
              value={values.cardName}
              onChange={handleChange}
              placeholder="Name"
              disabled="disabled"
              className="input_name"
            />
          </label>
          <label>
            <input
              type="text"
              name="cardNumber"
              maxLength="16"
              onChange={handleChange}
              placeholder="XXXX XXXX XXXX XXXX"
              required
            />
          </label>
          <label>
            <input
              type="text"
              name="cardYear"
              maxLength="2"
              onChange={handleChange}
              placeholder="Year"
            />
          </label>
          <label>
            <input
              type="text"
              name="cardMonth"
              maxLength="2"
              onChange={handleChange}
              placeholder=" Month"
            />
          </label>
          <label>
            <input
              type="text"
              name="cvv"
              maxLength="3"
              onChange={handleChange}
              placeholder="CVV"
            />
          </label>
          <label htmlFor="bankName">Vendor</label>
          <select name="bankName" onChange={handleChange}>
            <option hidden="hidden">Choose a Vender</option>
            <option value="American express">American express</option>
            <option value="Visa">Visa</option>
            <option value="Mastercard">Mastercard</option>
            <option value="Moha AB">Moha AB</option>
            <option value="Anonymous">Anonymous</option>
          </select>
          <div style={{ marginTop: "20px" }}>
            <button className="submit" onClick={handleSubmit}>
              Submit
            </button>
            <Link to="/home">
              <button>Go Back To Home</button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCard;
