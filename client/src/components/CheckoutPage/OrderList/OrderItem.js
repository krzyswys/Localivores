import React from 'react';
import classes from './OrderList.module.css';

const OrderItem = ({ product, onDelete }) => {
  const calculateActualPrice = (price, discount) => {
    const priceValue = parseFloat(price);
    const discountDecimal = parseFloat(discount) / 100;
    const discountValue = priceValue * discountDecimal;
    const actualPrice = priceValue - discountValue;
    return actualPrice.toFixed(2);
  };

  const actualPrice = calculateActualPrice(product.product_price, product.product_discount);
  const showDiscount = actualPrice !== product.product_price;

  return (
    <div className={classes.productCard}>
      <img src={product.picture} alt={product.product_name} className={classes.productImage} />
      <div className={classes.productInfo}>
        <h2 className={classes.productName}>{product.product_name}</h2>
        <div className={classes.productDetails}>
          <p className={classes.productDescription}>{product.product_description}</p>
        </div>
        <div className={classes.productDetails}>
          <p className={classes.price} style={showDiscount ? { textDecoration: 'line-through' } : {}}>Price: {product.product_price} USD</p>
          <p className={classes.weight}>Weight: {product.product_weight}</p>
        </div>
        <div className={classes.productDetails}>
          {showDiscount && <p className={classes.discount}>Discount {product.product_discount}</p>}
          <p className={classes.shopAddress}>{product.shop_address}</p>
        </div>
        <div className={classes.productDetails}>
          {showDiscount && <p className={classes.actualPrice}>Actual Price: {actualPrice} USD</p>}
          <p className={classes.expirationDate}>Expiration Date: {product.product_expiration_date}</p>
        </div>
        <div className={classes.productDetails}>
          <p className={classes.amount}>Amount: {1} </p>
          <button className={classes.button} onClick={() => onDelete(product.product_id)}>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default OrderItem;
