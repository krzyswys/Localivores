import React from 'react';
import classes from './AfterSearch.module.css';
import { FaTag, FaStore, FaMapMarkerAlt, FaInfoCircle, FaShoppingCart, FaPlus } from 'react-icons/fa';
import Button from '../../UI/Button/Button'
import ProductModal from './ProductModal';
const MAX_LENGTH = 20; 

const ProductCard = ({ product }) => {
    const [showModal, setShowModal] = React.useState(false);
    
    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    const formatString = (str) => {
        if (str.length > MAX_LENGTH) {
            return str.slice(0, MAX_LENGTH) + "...";
        } 
        return str;
    };
    
    return (
        <React.Fragment>
        {showModal &&<ProductModal onClose={closeModal} data={product} />}
        <div className={classes.productCard} onClick={openModal}>
            <h2 className={classes.productTitle}><FaTag className={classes.icon} /> {formatString(product.product_name)}</h2> 
            <p className={classes.productDescription}>{formatString(product.product_description)}</p>
            <p className={classes.productPrice}>Cena: {product.product_price}</p>
            <p className={classes.shopName}><FaStore className={classes.icon} />{formatString(product.shop_name)}</p> 
            <p className={classes.shopAddress}><FaMapMarkerAlt className={classes.icon} />{formatString(product.shop_address)}</p>
            <Button className={classes.detailButton} onClick={openModal}><FaInfoCircle className={classes['button-icon']} />Show details</Button>
            <div className={classes.buttonContainer}>
                <Button className={classes.cartButton}><FaShoppingCart className={classes['button-icon']} /><FaPlus className={classes['button-icon']} /></Button>
                <Button className={classes.buyButton}>Buy!</Button>
            </div>
        </div>
       </React.Fragment>
    );
};

export default ProductCard;
