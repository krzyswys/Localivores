import React from 'react';
import styles from './AfterSearch.module.css';
import { FaTag, FaStore, FaMapMarkerAlt, FaInfoCircle } from 'react-icons/fa';

const MAX_LENGTH = 20; 

const ProductCard = ({ product }) => {
    const formatString = (str) => {
        if (str.length > MAX_LENGTH) {
            return str.slice(0, MAX_LENGTH) + "...";
        } 
        return str;
    };
    
    return (
        <div className={styles.productCard}>
            <h2 className={styles.productTitle}><FaTag className={styles.icon} /> {formatString(product.product_name)}</h2> 
            <p className={styles.productDescription}>{formatString(product.product_description)}</p>
            <p className={styles.productPrice}>Cena: {product.product_price}</p>
            <p className={styles.shopName}><FaStore className={styles.icon} />{formatString(product.shop_name)}</p> 
            <p className={styles.shopAddress}><FaMapMarkerAlt className={styles.icon} />{formatString(product.shop_address)}</p>
            <button className={styles.detailButton}><FaInfoCircle className={styles['button-icon']} />Show details</button>
        </div>
    );
};

export default ProductCard;
