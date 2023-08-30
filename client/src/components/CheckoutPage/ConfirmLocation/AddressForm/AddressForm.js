import React from "react";
import classes from "./AddressForm.module.css";
import CheckoutInput from "../../CheckoutInput";  // Załóżmy, że ścieżka jest właściwa

const AddressForm = () => {
  return (
    <div className={classes["address-form-container"]}>
      <form>
          <CheckoutInput label="Address" />
        <label>
          Delivery Type:
          <select className={classes.input}>
            <option value="door">To Door</option>
            <option value="outside">Pick Up Outside</option>
          </select>
        </label>
        <label>
          Delivery Note:
          <textarea className={classes.input} name="note" />
        </label>
      </form>
    </div>
  );
};

export default AddressForm;
