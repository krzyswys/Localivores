import React from 'react';
import {handleInputFocus , handleInputBlur} from '../../../../utility/handleInput'
const QuantityInput = ({ quantity, handleQuantityChange, styles }) => {
    return (
        <div className={styles.input_container}>
            <input
                type='number'
                value={quantity}
                onChange={handleQuantityChange}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
            />
        </div>
    );
};

export default QuantityInput;
