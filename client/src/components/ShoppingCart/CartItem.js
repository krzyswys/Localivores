import styles from "./ShoppingCart.module.css";
// {
//     product_id: "g1",
//     product_name: "Apple",
//     product_description: "Tasty apple",
//     product_price: "2.99",
//     product_weight: "150g",
//     production_date: "2023-05-10",
//     product_discount: "0%",
//     product_origin: "Poland",
//     product_expiration_date: "2023-08-10",
//     shop_name: "Local Farmer",
//     quantity:"1",
//     shop_rate: "4.5",
//     picture: "https://picsum.photos/300",
//     shop_address: "Green Street 12, Warsaw",
//     shop_opening_hours: "8:00-20:00",
//     shop_longitude: "21.0118",
//     shop_latitude: "52.2297",
//   }

const CartItem = ({ item, removeFromCart }) => {
  return (
    <div className={styles.cartItem}>
      <div className={styles.productDetails}>
        <img
          className={styles.picture}
          src={item.picture}
          alt={item.product_name}
        />
        <span className={styles.name}>{item.product_name}</span>
      </div>

      <span>{item.shop_name}</span>
      <span>{item.product_price} zl</span>
      <div className={styles.quantity}>
        <span>{item.quantity}</span>
        <button
          className={styles.removeButton}
          onClick={() => removeFromCart(item.product_id)}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;
