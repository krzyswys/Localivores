import React from 'react';
import ReactDOM from 'react-dom';
import Button from '../../UI/Button/Button'
import classes from './ProductModal.module.css';
import classes2 from './AfterSearch.module.css';
import { FaShoppingCart, FaPlus } from 'react-icons/fa';
const Backdrop = props => {
  return <div className={classes.backdrop} onClick={props.onClose} />;
}

const ModalOverlay = (props) => {
   const product = props.data;
  
  
   const onCloseHandler = () => {
    props.onClose(true);
    }
  
   return (
    <div className={classes.modal}>
      
      <div className={classes.row}>
        <div className={classes.column}>
        <h2>{product.product_name}</h2>
                <p>Price: {product.product_price}</p>
                <p>Weight: {product.product_weight}</p>
                <p>Production Date: {product.production_date}</p>
                <p>Discount: {product.product_discount}</p>
                <p>Origin: {product.product_origin}</p>
                <p>Expiration Date: {product.product_expiration_date}</p>
        </div>
        <div className={classes.column}>
                <h2>Shop Details</h2>
                <p>Name: {product.shop_name}</p>
                <p>Address: {product.shop_address}</p>
                <p>Opening Hours: {product.shop_opening_hours}</p>
                <p>Coordinates: ({product.shop_longitude}, {product.shop_latitude})</p>   
                <div className={classes2.buttonContainer}>
                    <Button className={classes2.cartButton}><FaShoppingCart className={classes2['button-icon']} /><FaPlus className={classes2['button-icon']} /></Button>
                    <Button className={classes2.buyButton}>Buy!</Button>
                 </div>
        </div>
      </div>
      <div className={classes.row}>
            <div className={classes.column}>
                <p>Description: {product.product_description}</p>
                <Button className={classes.button} onClick={onCloseHandler}>Close</Button>
            </div>
        </div>
    </div>
  );
}

const ErrorModal = (props) => {
 // console.log(props.data);
    return (
    <React.Fragment>
      {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, document.getElementById('backdrop-root'))}
      {ReactDOM.createPortal(<ModalOverlay  data={props.data} onClose={props.onClose} />, document.getElementById('overlay-root'))}
    </React.Fragment>
  );
};

export default ErrorModal;
