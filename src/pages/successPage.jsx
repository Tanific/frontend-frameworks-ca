import { useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "../components/layout/layout";
import { useCart } from "../components/cart/cartContext";
import styles from "./successPage.module.css";

const CheckoutSuccessPage = () => {
  const { clearCart } = useCart();

  useEffect(() => {
    clearCart();
  }, [clearCart]);

  return (
    <Layout>
      <div className={styles.successContainer}>
        <h1>Checkout Successful</h1>
        <p>Thank you for your purchase!</p>
        <Link to="/" className={styles.backToStoreLink}>
          Back to Store
        </Link>
      </div>
    </Layout>
  );
};

export default CheckoutSuccessPage;