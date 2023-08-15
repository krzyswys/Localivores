import React from "react";
import CardInfoForm from "./CardInfoForm/CardInfoForm";
import "./Payment.css";

const Payment = () => {
  return (
    <div className="payment-container">
      <h2>Payment</h2>
      <CardInfoForm />
    </div>
  );
};

export default Payment;
