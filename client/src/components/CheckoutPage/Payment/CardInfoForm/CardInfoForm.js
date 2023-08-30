import React from "react";
import classes from "./CardInfoForm.module.css";
import CheckoutInput from "../../CheckoutInput";
const CardInfoForm = () => {
  return (
    
      <form className={classes["card-info-form-container"]}>
        <div className={classes["card-details"]}>
          <label>
            Card Number:
            <input className={classes["payment-input"]} type="text" name="cardNumber" />
          </label>
          <CheckoutInput 
            type="text"
            name="cardNumber"
            label="Card Number"
            classes="payment-input"
           />
          <label>
            Expiry Date:
            <input className={classes["payment-input"]} type="text" name="expiryDate" />
          </label>
        </div>
        <div className={classes["cvv-submit"]}>
          <label>
          
            <input className={classes["payment-input"]} type="text" name="cvv" placeholder="CVV" />
          </label>
          <button className={classes["payment-button"]} type="button">Pay Now</button>
        </div>
      </form>
    
  );
};

export default CardInfoForm;
