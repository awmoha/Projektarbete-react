import React from "react";
import { Link } from "react-router-dom";
export const AddCard = () => {
  return (
    <div className="label_card">
      <h2>Add Card</h2>
      <label>
        <input type="" id="" placeholder="Name" />
      </label>
      <label>
        <input type="" id="" placeholder="XXXX XXXX XXXX XXXX" />
      </label>
      <label>
        <input type="" id="" placeholder="Year" />
      </label>
      <label>
        <input type="" id="" placeholder=" Month" />
      </label>
      <label>
        <input type="" id="" placeholder="CCV" />
      </label>
      <label htmlFor="cardNumber">Vendor</label>
      <select id="americanExpress">
        <option value="American express" id="americanExpress">
          American express
        </option>
        <option id="visa">Visa</option>
        <option id="mastercard">Mastercard</option>
      </select>
      <div>
        <Link to="/">
          <button>Go Back</button>
        </Link>
      </div>
    </div>
  );
};

export default AddCard;
