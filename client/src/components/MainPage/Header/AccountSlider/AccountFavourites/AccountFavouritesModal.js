import React from 'react';
import classes from './AccountFavourites.module.css';
import { AiFillHeart } from 'react-icons/ai';
import { Link } from 'react-router-dom'

const AccountFavouritesModal = () => {


    return (
        <Link to="single-shop" className={classes.single_favourite_container}>
            <div className={classes.image_container}></div>
            <div className={classes.items_container}>
                <AiFillHeart size={30} className={classes.icon} />
                <h2>Local shop</h2>
                <p>Słowackiego 1a, Kraków, Poland</p>
                <p>Orders: 5</p>
                <h3>Last order: 20.19.2020</h3>
            </div>

        </Link>

    );
};

export default AccountFavouritesModal;
