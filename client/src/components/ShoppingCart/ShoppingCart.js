import React, { useState } from "react";

import CartItem from "./CartItem";
import styles from "./ShoppingCart.module.css";
import "./Animations.css";
import CSSTransition from "react-transition-group/CSSTransition";

const dummyData = [
  {
    product_id: "g1",
    product_name: "Apple",
    product_description: "Tasty apple",
    product_price: "2.99",
    product_weight: "150",
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
    product_price: "3.99",
    product_weight: "150",
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
    product_price: "3.59",
    product_weight: "150",
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
    product_price: "3.59",
    product_weight: "150",
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
    product_price: "3.59",
    product_weight: "150",
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
  //changing the state of the column - weight to price and vice versa
  const [infoColumn, setInfoColumn] = useState("weight");

  const addToCart = (product) => {
    // Logika dodawania do koszyka
  };

  const removeFromCart = (id) => {
    // Logika usuwania z koszyka
  };

  const calculateTotal = () => {
    // Obliczanie sumy
  };

  const toggleColumn = () => {
    //zmiana kolumny
    setInfoColumn(infoColumn === "weight" ? "price" : "weight");
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
              unit {infoColumn}
              <span className={styles.toggler} onClick={() => toggleColumn()}>
                Show {infoColumn === "weight" ? "price" : "weight"}
              </span>
            </span>
            <span className={styles.productInfo}>
              {infoColumn}
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
                  removeFromCart={removeFromCart}
                  addToCart={addToCart}
                  infoColumn={infoColumn}
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
