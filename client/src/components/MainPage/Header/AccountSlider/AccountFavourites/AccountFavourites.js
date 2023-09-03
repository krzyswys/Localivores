import React from 'react';
import classes from './AccountFavourites.module.css';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { AiOutlineHeart } from 'react-icons/ai';
import AccountFavouritesModal from './AccountFavouritesModal';
const AccountFavourites = ({ handleMenuClick }) => {
    return (
        <div className={classes.account_settings_menu_container} onClick={(e) => e.stopPropagation()}>
            <div className={classes.go_back_icon} onClick={() => handleMenuClick("main")}><AiOutlineArrowLeft /></div>
            <div className={classes.account_settings_inner_menu_container}>
                <h2 className={classes.account_settings_headline}>
                    <p className={classes.account_settings_name}><AiOutlineHeart /></p> Favourites
                </h2>
                <span className={classes.account_settings_line}></span>
                <div className={classes.favourites_container}>
                    <AccountFavouritesModal />
                    <AccountFavouritesModal />
                </div>
            </div>
        </div>
    );
};

export default AccountFavourites;
