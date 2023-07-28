import React from 'react';
import classes from './AfterSearch.module.css';
import { FaTag, FaStore, FaMapMarkerAlt, FaInfoCircle, FaShoppingCart, FaPlus } from 'react-icons/fa';
import ReactStars from 'react-stars'
import Button from '../../UI/Button/Button'
import CardImage from '../../UI/CardImage/CardImage'
import Card from '../../UI/Card/Card'
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
            <CardImage src={product.picture} alt={product.product_name} />  
            <h2 className={classes.productTitle}><FaTag className={classes.icon} /> {formatString(product.product_name)}</h2> 
            <p className={classes.productPrice}>{product.product_price} zł</p>
            <p className={classes.shopName}><FaStore className={classes.icon} />{formatString(product.shop_name)}</p> 
            <p className={classes.shopAddress}><FaMapMarkerAlt className={classes.icon} />{formatString(product.shop_address)}</p>
            <Card>
            <ReactStars count={5} value={product.shop_rate} edit={false} size={18} color1={'white'} color2={'yellow'}/>
            </Card>
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
