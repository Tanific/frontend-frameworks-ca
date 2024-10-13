import styles from './product-reviews.module.css';

const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <span
          key={i}
          className={i < rating ? styles.starFilled : styles.starEmpty}
        >
          &#9733;
        </span>
      );
    }
    return stars;
  };
  
  export default renderStars;