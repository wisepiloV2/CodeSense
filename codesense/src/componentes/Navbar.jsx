import { useLocation, Link } from 'react-router-dom';
import styles from './Navbar.module.css';

const Logo = () => (
    <div className={styles.NavLogoContainer}>
        <svg className={styles.NavLogoIcon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L2 7l10 5 10-5-10-5zm0 9l2.5-1.25L12 8.5l-2.5 1.25L12 11zm0 2.5l-5-2.5-5 2.5L12 22l10-8.5-5-2.5-5 2.5z"/>
        </svg>
        <span>Code Sense</span>
    </div>
);

function Navbar() {
    const location = useLocation();
    const isActive = (path) => location.pathname === path ? styles.activeLink : '';

    return (
        <header className={styles.NavContainer}>
            <Logo />
            <nav>
                <ul className={styles.NavLinks}>
                    <li className={`${styles.NavLink} ${isActive('/home')}`}>
                        <Link to="/home" className={styles.Clean}>Home</Link>
                    </li>
                    
                    <li className={`${styles.NavLink} ${isActive('/quiz-config')}`}>
                        <Link to="/quiz-config" className={styles.Clean}>Quiz</Link>
                    </li>

                    <li className={`${styles.NavLink} ${isActive('/about')}`}>
                        About
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Navbar;