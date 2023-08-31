import React from "react";
import classes from "./AddressForm.module.css";
import CheckoutInput from "../../CheckoutInput";  // Załóżmy, że ścieżka jest właściwa

const AddressForm = () => {
  const deliveryOptions = [
    { label: "To Door", value: "door" },
    { label: "Pick Up Outside", value: "outside" }
  ];
  
  return (
    <div className={classes["address-form-container"]}>
      <form>
          <CheckoutInput label="Address" />
        {/* <label>
          Delivery Type:
          <select className={classes.input}>
            <option value="door">To Door</option>
            <option value="outside">Pick Up Outside</option>
          </select>
        </label>
        <label>
          Delivery Note:
          <textarea className={classes.input} name="note" />
        </label> */}
        
          <CheckoutInput label="Delivery Type" type="select" options={deliveryOptions} className={classes.input} />
          <CheckoutInput label="Delivery Note" type="textarea" className={classes.input} />
      </form>
    </div>
  );
};

export default AddressForm;
