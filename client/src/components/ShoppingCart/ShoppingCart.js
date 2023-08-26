import React, { useState } from "react";

import CartItem from "./CartItem";
import styles from "./ShoppingCart.module.css";
import groceryImage from "../../assets/Cart/grocery-cart-background.jpg";

const dummyData = [
  {
    product_id: "g1",
    product_name: "Apple",
    product_description: "Tasty apple",
    product_price: "2.99",
    product_weight: "150g",
    production_date: "2023-05-10",
    product_discount: "0%",
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
    product_weight: "150g",
    production_date: "2023-05-12",
    product_discount: "15%",
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
    product_weight: "150g",
    production_date: "2023-06-01",
    product_discount: "5%",
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
    product_weight: "150g",
    production_date: "2023-06-01",
    product_discount: "5%",
    product_origin: "Spain",
    shop_rate: "5",
    quantity: "1",
    product_expiration_date: "2023-08-30",
    shop_name: "Biedronka",
    picture: "https://picsum.photos/300",
    shop_address: "Red Street 6, Warsaw",
    shop_opening_hours: "8:30-21:00",
    shop_longitude: "21.0144",
    shop_latitude: "52.2321",
  },
];

const ShoppingCart = () => {
  const [cart, setCart] = useState(dummyData);
  const [totalAmount, setTotalAmount] = useState(0);

  const addToCart = (product) => {
    // Logika dodawania do koszyka
  };

  const removeFromCart = (id) => {
    // Logika usuwania z koszyka
  };

  const calculateTotal = () => {
    // Obliczanie sumy
  };

  return (
    <section className={styles.shoppingCartSection}>
      <div className={styles.shoppingCart}>
        <div className={styles.header}>
          <span>Product</span>
          <span>Shop</span>
          <span>Price</span>
          <span>Quantity</span>
        </div>
        {cart.map((item) => (
          <CartItem
            key={item.product_id}
            item={item}
            removeFromCart={removeFromCart}
          />
        ))}
        <div className={styles.footer}>
          <span className={styles.total}>Total: {totalAmount}</span>
          <button className={styles.purchaseButton}>PURCHASE</button>
        </div>
      </div>
    </section>
  );
};

export default ShoppingCart;
