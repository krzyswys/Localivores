import React from "react";
import classes from "./AddressForm.module.css";

const AddressForm = () => {
  return (
    <div className={classes["address-form-container"]}>
      <form>
        <label>
          Address:
          <input type="text" name="address" />
        </label>
        <label>
          Delivery Type:
          <select>
            <option value="door">To Door</option>
            <option value="outside">Pick Up Outside</option>
          </select>
        </label>
        <label>
          Delivery Note:
          <textarea name="note" />
        </label>
        <input type="submit" value="Confirm" />
      </form>
    </div>
  );
};

export default AddressForm;
