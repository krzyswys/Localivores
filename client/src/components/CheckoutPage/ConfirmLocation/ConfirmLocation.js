import React from "react";
import Map from "./Map/Map";
import AddressForm from "./AddressForm/AddressForm";
import './ConfirmLocation.css'
const ConfirmLocation = () => {
  return (
    <div className="confirm-location-container">
      <Map />
      <AddressForm />
    </div>
  );
};

export default ConfirmLocation;
