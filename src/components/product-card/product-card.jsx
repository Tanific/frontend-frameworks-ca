import styles from "./product-card.module.css";
import { Link } from "react-router-dom";

const ProductCard = ({
  id,
  title,
  imageUrl,
  description,
  price,
  discountedPrice,
}) => {
  const isDiscounted = price > discountedPrice;
  const discount = Math.round(((price - discountedPrice) / price) * 100);

  return (
    <li className={styles.card}>
      <Link to={`/product/${id}`} className={styles.link}>
        <img className={styles.image} src={imageUrl} alt={title} />
        <div className={styles.body}>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.description}>{description}</p>
        </div>
        <div className={styles.footer}>
          {isDiscounted && (
            <p className={styles.discountedPrice}>
              Discounted Price: kr {discountedPrice} (Save {discount}%)
            </p>
          )}
          <p className={styles.price}>Price: kr {price}</p>
        </div>
      </Link>
    </li>
  );
};

export default ProductCard;
