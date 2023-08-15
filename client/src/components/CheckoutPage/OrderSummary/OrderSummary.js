import React from "react";
import classes from "./OrderSummary.module.css";

const OrderSummary = () => {
  return (
    <div className={classes["order-summary-container"]}>
      <h2>Order Summary</h2>
      <p>You ordered from:</p>
      <ul>
        <li>Store 1</li>
        <li>Store 2</li>
      </ul>
      <p>Subtotal: $30</p>
      <p>Delivery Fee: $5</p>
      <p>Total: $35</p>
    </div>
  );
};

export default OrderSummary;
