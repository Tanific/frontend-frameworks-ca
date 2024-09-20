import styles from './navigation.module.css';
import CartIcon from '../cart-icon/cart-icon';

const Navigation = ({ items }) => {
    return (
        <nav className={styles.navigation} aria-label="Main navigation">
            <ul>
                {items.map((item, index) => (
                    <li key={index}>
                        <a href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} className={styles.navLink}>
                            {item}
                        </a>
                    </li>
                ))}
                <li>
                    <CartIcon />
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;