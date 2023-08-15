import React from "react";
import ConfirmLocation from "./ConfirmLocation/ConfirmLocation";
import DeliveryTime from "./DeliveryTime/DeliveryTime";
import OrderList from "./OrderList/OrderList";
import OrderSummary from "./OrderSummary/OrderSummary";
import Payment from "./Payment/Payment";
import classes from  "./Checkout.module.css";



  const Checkout = (props) => {
    return (
      <div className={classes["checkout-container"]}>
        <div className={classes["column-1"]}>
          <ConfirmLocation />
          <DeliveryTime />
          <Payment />
        </div>
        <div className={classes["column-2"]}>
          <OrderList />
          <OrderSummary />
        </div>
      </div>
    );
  };
  
export default Checkout;
