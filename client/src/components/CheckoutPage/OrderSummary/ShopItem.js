import React from 'react';
import classes from './OrderSummary.module.css';

const ShopItem = ({ shop }) => {
  return (
    <div className={classes.shopItem}>
      <h3 className={classes.shopName}>{shop.shop_name}</h3>
      <p className={classes.shopAddress}>{shop.shop_address}</p>
      <p className={classes.shopRate}>Rating: {shop.shop_rate}</p>
    </div>
  );
};

export default ShopItem;
