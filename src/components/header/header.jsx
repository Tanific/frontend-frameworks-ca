import styles from './header.module.css';
import Navigation from '../navigation/navigation';

const navItems = ["Products", "Contact", "Cart"];

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.wrapper}>

                <div className={styles.branding}>
                    <h1 className={styles.logo}>eCom</h1>
                </div>

                <div className={styles.navlinks}>
                    <Navigation items={navItems} />
                </div>

            </div>
        </header>
    );
}

export default Header;
