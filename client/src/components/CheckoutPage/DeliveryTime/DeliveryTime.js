import React from "react";
import classes from "./DeliveryTime.module.css";

const DeliveryTime = () => {
  return (
    <div  className={classes["delivery-time-container"]}>
      <h2>Estimated Time: 45 mins</h2>
      <div className={classes["priority-container"]}>
      <input type="checkbox" id="priority-checkbox" className={classes["priority-checkbox"]} />
        <label htmlFor="priority-checkbox" className={classes["priority-label"]}>
          Give higher priority
        </label>
        
      </div>
    </div>
  );
};

export default DeliveryTime;
