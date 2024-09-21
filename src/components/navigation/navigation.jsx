import styles from './navigation.module.css';
import CartIcon from '../cart-icon/cart-icon';

const Navigation = ({ items }) => {
    return (
        <nav className={styles.navigation} aria-label="Main navigation">
            <ul>
                {items.map((item) => (
                    <ul className={styles.navLink}>
                    {item}
                    </ul>
                ))}
                <li>
                    <CartIcon />
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;