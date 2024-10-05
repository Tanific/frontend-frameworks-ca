import styles from "./navigation.module.css";
import CartIcon from "../cart-icon/cart-icon";
import { Link } from "react-router-dom";

const Navigation = () => {
    return (
        <nav className={styles.navigation} aria-label="Main navigation">
                <ul className={styles.navlinks}>
                    <li>
                        <Link to ={'/'}>Products</Link>
                    </li>
                    <li>
                        <Link to ={'/contact'}>Contact</Link>
                    </li>
                    <li>
                        <Link to ={'/cart'}><CartIcon/></Link>
                    </li>
                </ul>
        </nav>
    );
};

export default Navigation;
