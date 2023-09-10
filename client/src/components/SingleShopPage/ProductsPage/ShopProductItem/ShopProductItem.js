import React, { useState } from 'react';
import classes from "./ShopProductItem.module.css";
import QuantityInput from './QuantityInput';
import {getIconByTitle} from "../../../../UI/Enums/UtilityIconsEnum"

const ShopProductItem = ({ product }) => {
    const {
        units,
        unit,
        pricePerUnit,
        pickedDate,
        expirationDate,
        description,
        title
    } = product;
    const [quantity, setQuantity] = useState(0);
    const [selectedUnit, setSelectedUnit] = useState(units[0]);
    const [isUnitListOpen, setUnitListOpen] = useState(false);
    // const [isChecked, setIsChecked] = useState(false);

    const handleUnitListClick = () => {
        setUnitListOpen(!isUnitListOpen);
    };
    const handleUnitClick = (Unit) => {
        setSelectedUnit(Unit);
        setUnitListOpen(false);
    };

    const handleQuantityChange = (e) => {
        const newQuantity = parseInt(e.target.value);
        if (!isNaN(newQuantity) && newQuantity >= 0) {
            setQuantity(newQuantity);
        }
    };

    // const handleCheckboxChange = () => {
    //     setIsChecked(!isChecked);
    // };

    return (
        <div className={classes.SAP} >
            <ul className={classes.product_header_section}>
                <h2 className={classes.title}>
                    {title}
                </h2>
                <li className={classes.icons_first_container} >
                    <div className={classes.icons_container}>
                        {getIconByTitle('Tomato', {
                            className: classes.first_icon
                        })}
                        {getIconByTitle('Tomato', {
                            className: classes.second_icon
                        })}
                    </div>

                </li>
                <li className={classes.price_info_container}>
                    <p>{pricePerUnit} $</p><p>/</p><p>{units[0]}{unit}</p>

                </li>
            </ul>

            <div
                className={classes.product_hidden_section}
            >
                <ul className={classes.dates_container}>
                    <li className={classes.date_container}>
                        <p>Picked: </p><div>{pickedDate}</div>
                    </li>
                    <li className={classes.date_container}>
                        <p>Expires: </p><div>{expirationDate}</div>
                    </li>
                </ul>

                <p className={classes.product_description}>{description}</p>
                <div className={classes.input_section}>
                    <h2 className={classes.input_section_header}>Quantity &nbsp;</h2>
                    <div className={classes.select_unit} onClick={handleUnitListClick}>
                        <p id="selectText">{selectedUnit}{unit}</p>
                        <ul id="list" className={isUnitListOpen ? classes.open : classes.closed}>
                            {units.map((Unit, index) => (
                                <li key={index} className={classes.options} onClick={() => handleUnitClick(Unit)}>{Unit}{unit}</li>
                            ))}
                        </ul>
                    </div>
                    <div className={classes.input_container}>
                        <QuantityInput
                            quantity={quantity}
                            handleQuantityChange={handleQuantityChange}
                            styles={classes}
                        />
                    </div>
                    {/* <div className={classes.checkbox_container}>
                        <input
                            type="checkbox"
                            className={classes.checkbox}
                            id="coolCheckbox"
                            checked={isChecked}
                            onChange={handleCheckboxChange}
                        />
                        <label htmlFor="coolCheckbox" className={classes.checkbox_label}>
                            <div className={isChecked ? classes.checkbox_checked : classes.checkbox_unchecked}></div>
                        </label>
                    </div> */}
                </div>
                <div className={classes.product_footer}>
                    <h2 className={classes.total_price}>Total:&nbsp;<p>{(selectedUnit / units[0]) * quantity * pricePerUnit} $</p>&nbsp;<p>,{selectedUnit * quantity / 1000}kg</p></h2>
                    <button className={classes.add_to_cart_button}>Add to cart</button>

                </div>
            </div>
        </div >
    );
};


export default ShopProductItem;
