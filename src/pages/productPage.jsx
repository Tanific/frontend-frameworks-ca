import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getProductByID } from "../api/getProductByID";
import Layout from "../components/layout/layout";
import LoadingSpinner from "../components/spinner/spinner";
import { useCart } from "../components/cart/cartContext";
import renderStars from "../components/product-card/product-reviews";
import Toast from "../components/toast/toast";

import styles from "./productPage.module.css";

const ProductPage = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();
  const [toast, setToast] = useState({ message: "", type: "", visible: false });

  useEffect(() => {
    const getData = async () => {
      if (!id) return;
      const response = await getProductByID(id);
      const product = response.data;
      setData(product);
    };

    getData();
  }, [id]);

  const handleAddToCart = () => {
    if (data) {
      addToCart(data, quantity);
      setToast({ message: "Product added to cart!", type: "success", visible: true });
    }
  };

  const handleQuantityChange = (amount) => {
    setQuantity((prevQuantity) => Math.max(1, prevQuantity + amount));
  };

  const handleCloseToast = () => {
    setToast((prevToast) => ({ ...prevToast, visible: false }));
  };

  const isDiscounted = data && data.discountedPrice < data.price;

  return (
    <Layout>
      {data ? (
        <>
          <div className={styles.goBackButtonContainer}>
            <Link to="/" className={styles.goBackButton}>
              Back to products
            </Link>
          </div>
          <div className={styles.containerWithReviews}>
            <div className={styles.contentContainer}>
              <h1 className={styles.title}>{data.title}</h1>
              <div className={styles.imageContainer}>
                <img
                  src={data.image.url}
                  alt={data.title}
                  className={styles.image}
                />
              </div>
              <p className={styles.description}>{data.description}</p>
              <div className={styles.priceContainer}>
                {isDiscounted && (
                  <span className={styles.originalPrice}>kr {data.price},-</span>
                )}
                <span className={styles.price}>
                  {isDiscounted ? `kr ${data.discountedPrice},-` : `kr ${data.price},-`}
                </span>
              </div>
              <div className={styles.quantityContainer}>
                <button onClick={() => handleQuantityChange(-1)}>-</button>
                <span>{quantity}</span>
                <button onClick={() => handleQuantityChange(1)}>+</button>
              </div>
              <button
                className={styles.addToCartButton}
                onClick={handleAddToCart}
              >
                Add to Cart
              </button>
            </div>
            <div className={styles.reviewsContainer}>
              {data.tags && data.tags.length > 0 && (
                <div className={styles.tagsContainer}>
                  {data.tags.map((tag, index) => (
                    <span key={index} className={styles.tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              )}
              <h2 className={styles.reviewsTitle}>Reviews</h2>
              {data.reviews && data.reviews.length > 0 ? (
                <ul className={styles.reviewsList}>
                  {data.reviews.map((review) => (
                    <li key={review.id} className={styles.reviewItem}>
                      <div className={styles.reviewStars}>
                        {renderStars(review.rating)}
                      </div>
                      <p className={styles.reviewText}>{review.description}</p>
                      <p className={styles.reviewAuthor}>- {review.username}</p>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className={styles.noReviewsText}>
                  No reviews for this product.
                </p>
              )}
            </div>
          </div>
          <Toast
            message={toast.message}
            type={toast.type}
            visible={toast.visible}
            onClose={handleCloseToast}
          />
        </>
      ) : (
        <LoadingSpinner />
      )}
    </Layout>
  );
};

export default ProductPage;