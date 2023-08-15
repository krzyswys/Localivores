import React from "react";
import CardInfoForm from "./CardInfoForm/CardInfoForm";
import classes from "./Payment.module.css";

const Payment = () => {
  return (
    <div className={classes["payment-container"]}>
      <h2>Payment</h2>
      <CardInfoForm />
    </div>
  );
};

export default Payment;
