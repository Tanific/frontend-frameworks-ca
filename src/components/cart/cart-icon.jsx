import styles from "./cart-icon.module.css";
import { Link } from "react-router-dom";
import CartIconSVG from "../icons/cart";
import { useCart } from "../cart/cartContext";

const CartIcon = () => {
  const { cartItemCount } = useCart();

  return (
    <Link to={"/cart"} className={styles.icon}>
      <CartIconSVG />
      {cartItemCount > 0 && (
        <span className={styles.badge}>{cartItemCount}</span>
      )}
    </Link>
  );
};

export default CartIcon;
