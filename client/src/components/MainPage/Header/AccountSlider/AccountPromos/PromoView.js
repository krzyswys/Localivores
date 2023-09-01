import React, { useState } from 'react';
import './PromoView.css'
import { AiOutlineShareAlt } from 'react-icons/ai';
import { RxExternalLink } from 'react-icons/rx';
import { MdOutlineDiscount } from 'react-icons/md';

const PromoView = () => {
    const [isCodeVisible, setIsCodeVisible] = useState(true);
    const [isCodeRedeemed, setIsCodeRedeemed] = useState(false);

    const handlePromoCodeClick = () => {
        setIsCodeVisible(false);
        setIsCodeRedeemed(true);
    };

    return (
        <div className='promo-container'>
            <div className='promo-background-filter'></div>
            <h2 className='promo-header'><p>15% </p> off on all items</h2>
            <p className='promo-description'>Indulge in a delightful feast of savings! Enjoy a mouthwatering 15% off on all your favorite items, exclusively on our app – your go-to destination for everyday cravings. <p>Find guidelines <RxExternalLink /></p></p>
            <button className={`promo-button-code ${isCodeVisible ? '' : 'redeemed'}`} onClick={handlePromoCodeClick}>
                <p className='promo-code'>2@3RYt</p>
                <div className={`promo-button-slider ${isCodeVisible ? '' : 'expanded'}`}></div>
                {<p className={`promo-code-reedemed ${isCodeRedeemed ? 'visible' : ''}`}>Redeemed</p>}
            </button>
            <AiOutlineShareAlt className='promo-share-icon' />
            <MdOutlineDiscount className='promo-promo-icon' />
        </div>
    );
};

export default PromoView;