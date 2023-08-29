import React, { useState } from 'react';
import classes from "./ShopProductItem.module.css";
import { GiTomato } from 'react-icons/gi';
import { useSpring, animated } from 'react-spring';



const ShopProductItem = () => {
    const units = [100, 200, 300, 400, 500]
    const pricePerUnit = 5;

    const [isUnitListOpen, setUnitListOpen] = useState(false);
    const [selectedUnit, setSelectedUnit] = useState(100);

    const handleUnitListClick = () => {
        setUnitListOpen(!isUnitListOpen);
    };
    const handleUnitClick = (Unit) => {
        setSelectedUnit(Unit);
        setUnitListOpen(false);
    };
    const handleInputFocus = (event) => {
        const inputContainer = event.currentTarget.parentElement;
        const placeholder = inputContainer.querySelector('.placeholder');

        if (placeholder) {
            placeholder.classList.add('focused');
        }
    };

    const handleInputBlur = (event) => {
        const inputContainer = event.currentTarget.parentElement;
        const placeholder = inputContainer.querySelector('.placeholder');

        if (placeholder && !event.target.value) {
            placeholder.classList.remove('focused');
        }
    };
    const [quantity, setQuantity] = useState(0);

    const handleQuantityChange = (e) => {
        const newQuantity = parseInt(e.target.value);
        if (!isNaN(newQuantity) && newQuantity >= 0) {
            setQuantity(newQuantity);
        }
    };
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };
    const [isAddressExpanded, setAddressExpanded] = useState(false);
    const toggleExpandedAddress = () => {
        setAddressExpanded(!isAddressExpanded);
    };

    const hiddenSectionAnimation = useSpring({
        maxHeight: isAddressExpanded ? '300px' : '0px',
        borderTop: isAddressExpanded ? '1px dashed #00a082' : '1px dashed transparent',
        overflow: 'hidden',
    });

    return (
        <div className={classes.SAP} onClick={toggleExpandedAddress}>
            <div className={classes.product_header_section}>
                <h2 className={classes.title}>
                    Tomatos
                </h2>
                <div className={classes.icons_first_container} >
                    <div className={classes.icons_container}><GiTomato className={classes.first_icon} /><GiTomato className={classes.second_icon} /></div>

                </div>
                <div className={classes.price_info_container}>
                    <p>5 $</p><p>/</p><p>100g</p>

                </div>
            </div>

            <animated.div
                className={classes.product_hidden_section}
                // style={hiddenSectionAnimation} 
                onClick={(event) => event.stopPropagation()}
            >
                <div className={classes.dates_container}>
                    <div className={classes.date_container}>
                        <p>Picked: </p><div>21.37.69r</div>
                    </div>
                    <div className={classes.date_container}>
                        <p>Expires: </p><div>21.37.69r</div>
                    </div>
                </div>

                <p className={classes.product_description}>Super tomato grown at remarkable location</p>
                <div className={classes.input_section}>
                    <h2 className={classes.input_section_header}>Quantity &nbsp;</h2>
                    <div className={classes.select_unit} onClick={handleUnitListClick}>
                        <p id="selectText">{selectedUnit}g</p>
                        <ul id="list" className={isUnitListOpen ? classes.open : classes.closed}>
                            {units.map((Unit, index) => (
                                <li key={index} className={classes.options} onClick={() => handleUnitClick(Unit)}>{Unit}g</li>
                            ))}
                        </ul>
                    </div>
                    <div className={classes.input_container}>
                        <input
                            type='number'
                            value={quantity}
                            onChange={handleQuantityChange}
                            onFocus={handleInputFocus}
                            onBlur={handleInputBlur}
                        />
                    </div>
                    <div className={classes.checkbox_container}>
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
                    </div>
                </div>
                <div className={classes.product_footer}>
                    <h2 className={classes.total_price}>Total:&nbsp;<p>{(selectedUnit / units[0]) * quantity * pricePerUnit} $</p>&nbsp;<p>,{selectedUnit * quantity / 1000}kg</p></h2>
                    <button className={classes.add_to_cart_button}>Add to cart</button>

                </div>
            </animated.div>
        </div >
    );
};


export default ShopProductItem;
