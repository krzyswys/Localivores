import React from "react";
import classes from "./CardInfoForm.module.css";
import CheckoutInput from "../../CheckoutInput";

const CardInfoForm = () => {
  return (
    <form className={classes["card-info-form-container"]}>
      <div className={classes["card-details"]}>
        
          <CheckoutInput label="Card Number" className={classes["payment-input"]} />
        
        
        
          <CheckoutInput label="Expiry Date" className={classes["payment-input"]}  />
       
      </div>
      <div className={classes["cvv-submit"]}>
        
          <CheckoutInput label="CVV" className={classes["payment-input"]}  />
        
        <button className={classes["payment-button"]} type="button">Pay Now</button>
      </div>
    </form>
  );
};

export default CardInfoForm;
