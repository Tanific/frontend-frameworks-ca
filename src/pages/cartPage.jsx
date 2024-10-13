import { useCart } from "../components/cart/cartContext";
import Layout from "../components/layout/layout";
import { Link } from "react-router-dom";
import styles from "./cartPage.module.css";

const Cartpage = () => {
  const { cartItems, increaseQuantity, decreaseQuantity, removeFromCart } = useCart();

  const totalAmount = cartItems
    .reduce((total, item) => total + (item.discountedPrice || item.price) * item.quantity, 0)
    .toFixed(2);

  return (
    <Layout>
      <div className={styles.goBackButtonContainer}>
        <Link to="/" className={styles.goBackButton}>
          Back to products
        </Link>
      </div>
      <div className={styles.cartContainer}>
        <h1>Shopping Cart</h1>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div>
            <ul className={styles.cartList}>
              {cartItems.map((item) => {
                const isDiscounted = item.discountedPrice && item.discountedPrice < item.price;
                return (
                  <li key={item.id} className={styles.cartItem}>
                    <img src={item.image.url} alt={item.title} className={styles.cartItemImage} />
                    <div className={styles.cartItemDetails}>
                      <h2 className={styles.itemTitle}>{item.title}</h2>
                      <div className={styles.priceContainer}>
                        {isDiscounted && (
                          <span className={styles.originalPrice}>kr {item.price},-</span>
                        )}
                        <span className={styles.price}>
                          {isDiscounted ? `kr ${item.discountedPrice},-` : `kr ${item.price},-`}
                        </span>
                      </div>
                      <div className={styles.quantityContainer}>
                        <button onClick={() => decreaseQuantity(item.id)}>-</button>
                        <span>{item.quantity}</span>
                        <button onClick={() => increaseQuantity(item.id)}>+</button>
                      </div>
                      <button onClick={() => removeFromCart(item.id)} className={styles.removeButton}>
                        Remove all
                      </button>
                    </div>
                  </li>
                );
              })}
            </ul>
            <div className={styles.cartTotal}>
              <h2>Total: kr {totalAmount},-</h2>
            </div>
            <Link to="/checkout-success" className={styles.checkoutButton}>
              Checkout
            </Link>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Cartpage;