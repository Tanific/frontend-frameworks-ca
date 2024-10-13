import { Link } from "react-router-dom";
import styles from "./product-card.module.css";

const ProductCard = ({
  id,
  title,
  imageUrl,
  description,
  price,
  discountedPrice,
}) => {
  const isDiscounted = discountedPrice && discountedPrice < price;
  const discountPercentage = isDiscounted
    ? Math.round(((price - discountedPrice) / price) * 100)
    : 0;

  return (
    <div className={styles.card}>
      <Link to={`/product/${id}`}>
        <div className={styles.imageContainer}>
          {isDiscounted && (
            <div className={styles.discountCircle}>
              -{discountPercentage}%
            </div>
          )}
          <div className={styles.image}>
            <img src={imageUrl} alt={title} />
          </div>
        </div>
        <div className={styles.body}>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.description}>{description}</p>
          <div className={styles.footer}>
            {isDiscounted && (
              <span className={styles.discountedPrice}>
                kr {discountedPrice},-
              </span>
            )}
            <span
              className={`${styles.price} ${
                isDiscounted ? styles.originalPrice : ""
              }`}
            >
              kr {price},-
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;