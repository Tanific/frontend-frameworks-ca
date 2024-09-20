import styles from './product-card.module.css';

const ProductCard = ({ id, title, imageUrl, description, price, discountedPrice }) => {
    const isDiscounted = price > discountedPrice;
    const discount = Math.round(((price - discountedPrice) / price) * 100);

    return (
        <li className={styles.card}>
            <img className={styles.image} src={imageUrl} alt={title} />
            <div className={styles.body}>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.description}>{description}</p>
                <p className={styles.price}>Price: ${price}</p>
                {isDiscounted && (
                    <p className={styles.discountedPrice}>
                        Discounted Price: ${discountedPrice} (Save {discount}%)
                    </p>
                )}
            </div>
        </li>
    );
};

export default ProductCard;
