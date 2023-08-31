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

const CartItem = ({ item, removeFromCart, addToCart, infoColumn }) => {
  let productInfo =
    infoColumn === "weight"
      ? item.product_weight + "g"
      : item.product_price + " zl";
  //When we want to display total price of product we need to multiply product price by quantity and doscount per unit price matter too
  let totalPrice =
    (+item.product_price * +item.quantity -
    (+item.product_price * +item.quantity * +item.product_discount) / 100).toFixed(2);
  let totalProductInfo =
    infoColumn === "weight"
      ? +item.product_weight * +item.quantity + "g"
      : totalPrice + " zl";

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
      <span className={styles.productInfo}>
        {productInfo}
        {infoColumn === "price" && <span className={styles.discount}>
          discount: {item.product_discount}%
        </span>}
      </span>
      <span>{totalProductInfo}</span>
      <div className={styles.quantity}>
        <span>{item.quantity}</span>
        <button
          className={styles.removeButton}
          onClick={() => removeFromCart(item.product_id)}
        >
          Remove
        </button>
        <button
          className={styles.addButton}
          onClick={() => addToCart(item.product_id)}
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default CartItem;
