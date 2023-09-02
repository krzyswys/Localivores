import React, { useState,useEffect } from "react";

import CartItem from "./CartItem";
import styles from "./ShoppingCart.module.css";
import "./Animations.css";
import CSSTransition from "react-transition-group/CSSTransition";
import {unitPrice,discountedPrice,calculatePrice} from '../../utility/price-calculator';
const dummyData = [
  {
    product_id: "g1",
    product_name: "Apple",
    product_description: "Tasty apple",
    pricePerUnit: "5/100",
    selectedWeight: "200",
    weight: ["100", "200", "250"],
    production_date: "2023-05-10",
    product_discount: "0",
    product_origin: "Poland",
    product_expiration_date: "2023-08-10",
    shop_name: "Local Farmer",
    quantity: "1",
    shop_rate: "4.5",
    picture: "https://picsum.photos/300",
    shop_address: "Green Street 12, Warsaw",
    shop_opening_hours: "8:00-20:00",
    shop_longitude: "21.0118",
    shop_latitude: "52.2297",
  },
  {
    product_id: "g2",
    product_name: "Apple",
    product_description: "Super Apple",
    pricePerUnit: "4/300",
    selectedWeight: "550",
    weight: ["300", "450", "550"],
    production_date: "2023-05-12",
    product_discount: "15",
    product_origin: "Ecuador",
    product_expiration_date: "2023-08-15",
    shop_name: "Health Mart",
    quantity: "1",
    shop_rate: "3.5",
    picture: "https://picsum.photos/300",
    shop_address: "Yellow Avenue 34, Warsaw",
    shop_opening_hours: "9:00-19:00",
    shop_longitude: "21.0133",
    shop_latitude: "52.2301",
  },
  {
    product_id: "g3",
    product_name: "Apple",
    product_description: "Fresh Apple",
    pricePerUnit: "3/100",
    selectedWeight: "300",
    weight: ["100", "300", "650"],
    production_date: "2023-06-01",
    product_discount: "5",
    product_origin: "Spain",
    quantity: "1",
    shop_rate: "5",
    product_expiration_date: "2023-08-30",
    shop_name: "GreenGrocer",
    picture: "https://picsum.photos/300",
    shop_address: "Red Street 6, Warsaw",
    shop_opening_hours: "8:30-21:00",
    shop_longitude: "21.0144",
    shop_latitude: "52.2321",
  },
  {
    product_id: "g4",
    product_name: "Applee",
    product_description: "Fresh Apple",
    selectedWeight: "300",
    pricePerUnit: "6/100",
    weight: ["100", "150", "650"],
    production_date: "2023-06-01",
    product_discount: "5",
    product_origin: "Spain",
    shop_rate: "5",
    quantity: "2",
    product_expiration_date: "2023-08-30",
    shop_name: "Biedronka",
    picture: "https://picsum.photos/300",
    shop_address: "Red Street 6, Warsaw",
    shop_opening_hours: "8:30-21:00",
    shop_longitude: "21.0144",
    shop_latitude: "52.2321",
  },
  {
    product_id: "g5",
    product_name: "Appleeuiu",
    product_description: "Fresh Apple",
    pricePerUnit: "6/100",
    selectedWeight: "150",
    weight: ["100", "150", "250"],
    production_date: "2023-06-01",
    product_discount: "5",
    product_origin: "Spain",
    shop_rate: "5",
    quantity: "2",
    product_expiration_date: "2023-08-30",
    shop_name: "Biedronka",
    picture: "https://picsum.photos/300",
    shop_address: "Red Street 6, Warsaw",
    shop_opening_hours: "8:30-21:00",
    shop_longitude: "21.0144",
    shop_latitude: "52.2321",
  },
];

const animationTiming = {
  enter: 800,
  exit: 1000,
};
const ShoppingCart = (props) => {
  const [cart, setCart] = useState(dummyData);
  const [totalAmount, setTotalAmount] = useState(0);
 
  const [infoColumn, setInfoColumn] = useState("price");

  
  
  const calculateTotal = () => {
    const total = cart.reduce((acc, item) => {
      const basicPrice = calculatePrice(item);
      const totalPrice = parseFloat(discountedPrice(basicPrice,item)).toFixed(2);
      return acc + parseFloat(totalPrice);
    }, 0);
    return total.toFixed(2);
  };
  useEffect(() => {
    setTotalAmount(calculateTotal());
  }, [cart]);
  

  const toggleColumn = () => {
    //zmiana kolumny
    setInfoColumn(infoColumn === "weight" ? "price" : "weight");
  };

  const updateSelectedWeight = (productId, newWeight) => {
    const updatedCart = cart.map((item) => {
      if (item.product_id === productId) {
        return { ...item, selectedWeight: newWeight };
      }
      return item;
    });
    setCart(updatedCart);
  };

  const updateQuantity = (productId, amount) => {
    let newCart;
    const product = cart.find((item) => item.product_id === productId);
    if ((+product.quantity) + amount === 0) {
      newCart = cart.filter((item) => item.product_id !== productId);
    }else{
      newCart = cart.map((item) => {
        if (item.product_id === productId) {
          return { ...item, quantity: (+item.quantity) + amount };
        }
        return item;
      });
    }
    
    setCart(newCart);
  };

  return (
    <>
      {props.show && (
        <div className={styles.backdrop} onClick={props.onClose}></div>
      )}
      <CSSTransition
        mountOnEnter
        unmountOnExit
        in={props.show}
        timeout={animationTiming}
        classNames={{
          enter: "",
          enterActive: "ModalOpen",
          exit: "",
          exitActive: "ModalClosed",
          // appear: '',//used for the first time the component is rendered
          // appearActive: '', //used for the first time the component is rendered
        }}
      >
        <div className={styles.shoppingCart}>
          <div className={styles.header}>
            <span>Product</span>
            <span>Shop</span>
            <span className={styles.units}>
               {infoColumn === "weight" ? "unit weight" : " basic price"}
              <span className={styles.toggler} onClick={() => toggleColumn()}>
                Show {infoColumn === "weight" ? "price" : "weight"}
              </span>
            </span>
            <span className={styles.units}>
              total {infoColumn}
              <span className={styles.toggler} onClick={() => toggleColumn()}>
                Show {infoColumn === "weight" ? "price" : "weight"}
              </span>
            </span>
            <span className={styles.quantityHeader}>Quantity</span>
          </div>
          <div className={styles.cartContent}>
            <div className={styles.cartInfo}>
              {cart.map((item) => (
                <CartItem
                  key={item.product_id}
                  item={item}
                  infoColumn={infoColumn}
                  updateSelectedWeight={updateSelectedWeight} 
                  updateQuantity={updateQuantity}
                />
              ))}
            </div>
          </div>
          <div className={styles.footer}>
            <span className={styles.total}>Total: {totalAmount}</span>
            <button className={`${styles.buttonBase} ${styles.purchaseButton}`}>
              PURCHASE
            </button>
            <button
              className={`${styles.buttonBase} ${styles.closeButton}`}
              onClick={props.onClose}
            >
              Close
            </button>
          </div>
        </div>
      </CSSTransition>
    </>
  );
};

export default ShoppingCart;
