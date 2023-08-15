import React from "react";
import "./CardInfoForm.css";

const CardInfoForm = () => {
  return (
    <div className="card-info-form-container">
      <form>
        <div className="card-details">
          <label>
            Card Number:
            <input className="payment-input" type="text" name="cardNumber" />
          </label>
          <label>
            Expiry Date:
            <input className="payment-input" type="text" name="expiryDate" />
          </label>
        </div>
        <div className="cvv-submit">
          <label>
            CVV:
            <input className="payment-input" type="text" name="cvv" />
          </label>
          <button className="payment-button" type="button">Pay Now</button>
        </div>
      </form>
    </div>
  );
};

export default CardInfoForm;
