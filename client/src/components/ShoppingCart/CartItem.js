import styles from "./ShoppingCart.module.css";

const calculatePrice = (item) => {
  const pricePerUnit = parseFloat(item.pricePerUnit.split("/")[0]);
  const weightUnit = parseInt(item.pricePerUnit.split("/")[1]);
  const price = (pricePerUnit / weightUnit) * +item.selectedWeight;
  const discountedPrice = price - (price * +item.product_discount) / 100;
  return discountedPrice.toFixed(2);
};
const CartItem = ({
  item,
  updateQuantity,
  infoColumn,
  updateSelectedWeight,
}) => {
  const productInfo =
    infoColumn === "weight"
      ? item.selectedWeight + "g"
      : calculatePrice(item) + " zl";

  const totalPrice = (parseFloat(calculatePrice(item)) * item.quantity).toFixed(
    2
  );

  const totalProductInfo =
    infoColumn === "weight"
      ? item.selectedWeight * item.quantity + "g"
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
        {infoColumn === "price" && productInfo}
        {infoColumn === "price" && (
          <span className={styles.discount}>
            discount: {item.product_discount}%
          </span>
        )}
        {infoColumn === "weight" && (
          <select
            value={item.selectedWeight}
            onChange={(e) => {
              updateSelectedWeight(item.product_id, e.target.value);
            }}
          >
            {item.weight.map((w, i) => (
              <option key={i} value={w}>
                {w}g
              </option>
            ))}
          </select>
        )}
      </span>
      <span>{totalProductInfo}</span>
      <div className={styles.quantity}>
        <span>{item.quantity}</span>
        <button
          className={styles.removeButton}
          onClick={() => updateQuantity(item.product_id, -1)}
        >
          Remove
        </button>
        <button
          className={styles.addButton}
          onClick={() => updateQuantity(item.product_id, 1)}
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default CartItem;
