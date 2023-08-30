import React from "react";
import Map from "./Map/Map";
import AddressForm from "./AddressForm/AddressForm";
import classes from "./ConfirmLocation.module.css";
const ConfirmLocation = () => {
  return (
    <div className={classes["confirm-location-wrapper"]}>
      <h2>Confirm Location</h2>
      <div  className={classes["confirm-location-container"]}>
        <Map />
        <AddressForm />
      </div>
    </div>
  );
};

export default ConfirmLocation;
