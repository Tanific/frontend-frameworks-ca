import styles from './header.module.css'
import Navigation from '../navigation/navigation'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.wrapper}>
                <div className={styles.branding}>
                    <Link to={'/'}> <h1 className={styles.logo}>eCom</h1></Link>
                </div>
                <Navigation/>
            </div>
        </header>
    );
}

export default Header;
