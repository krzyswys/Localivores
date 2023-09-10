import React, { useState } from 'react';
import './AccountPromos.css';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { TbShoppingCartDiscount } from 'react-icons/tb';
import { GiCheckMark } from 'react-icons/gi';
import PromoView from './PromoView';
import {handleInputFocus , handleInputBlur} from '../../../../../utility/handleInput'





const AccountPromos = ({ handleMenuClick }) => {
    const [promoCode, setPromoCode] = useState('');
    const [promoCodeEntered, setPromoCodeEntered] = useState(false);
    const handlePromoCodeEnter = () => {
        setPromoCodeEntered(true);
    };
    const handlePromoCodeChange = (e) => {
        setPromoCode(e.target.value);
    };

    return (
        <div className='account-promo-menu-container' onClick={(e) => e.stopPropagation()}>
            <div onClick={() => handleMenuClick("main")} className='go-back-icon'><AiOutlineArrowLeft /></div>
            <div className='account-promo-inner-menu-container'>
                <h2 className='account-promo-headline'>
                    <p className='account-promo-name'><TbShoppingCartDiscount /></p> Your promo <p className='account-promo-name'>codes</p> </h2>
                <span className='account-promo-line'></span>

                <div className='account-promo-options-container'>
                    <div className='input-promo-go-container'>
                        <div className={`input-promo-container ${promoCodeEntered ? 'promoCodeEntered' : ''}`}>
                            <input
                                type='text'
                                value={promoCode}
                                onChange={handlePromoCodeChange}
                                onFocus={handleInputFocus}
                                onBlur={handleInputBlur}
                            />
                            <div className={`placeholder ${promoCode ? 'focused' : ''}`}>Enter your promo code</div>
                        </div>
                        <GiCheckMark className='promo-apply-icon' onClick={handlePromoCodeEnter} />
                    </div>


                    <PromoView />
                    <PromoView />
                    <PromoView />


                </div>
            </div>
        </div>
    );
};

export default AccountPromos;
