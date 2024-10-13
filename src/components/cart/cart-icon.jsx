import { useEffect, useState } from "react";
import styles from "./cart-icon.module.css";
import { Link } from "react-router-dom";
import CartIconSVG from "../icons/cart";
import { useCart } from "../cart/cartContext";

const CartIcon = () => {
  const { cartItemCount } = useCart();
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const navbarHeight = document.querySelector("nav").offsetHeight;
      if (window.scrollY > navbarHeight) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Link to={"/cart"} className={`${styles.icon} ${isFixed ? styles.fixed : ""}`}>
      <CartIconSVG />
      {cartItemCount > 0 && (
        <span className={styles.badge}>{cartItemCount}</span>
      )}
    </Link>
  );
};

export default CartIcon;