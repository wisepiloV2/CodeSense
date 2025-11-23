import { useLocation, Link } from 'react-router-dom';
import styles from './Footer.module.css';

const socialData = {
    title: 'Redes',
    links: ['Mail', 'Linkedin', 'GitHub']
};

const Logo = () => (
    <div className={styles.LogoContainer}>
        <div className={styles.Logo}>
            <svg className={styles.LogoIcon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L2 7l10 5 10-5-10-5zm0 9l2.5-1.25L12 8.5l-2.5 1.25L12 11zm0 2.5l-5-2.5-5 2.5L12 22l10-8.5-5-2.5-5 2.5z"/>
            </svg>
            <span>Code Sense</span>
        </div>
        <p className={styles.LogoText}>Pon a prueba tus conocimientos.</p>
    </div>
);

function Footer() {
    return (
        <footer className={styles.Container}>
            <Logo />
            <LinksText /> 
            <LinksIcons data={socialData} />        
            <p className={styles.CopyRight}>&copy; 2025 Code Sense. Todos los derechos reservados.</p>
        </footer>
    );
}

function LinksText(){
    const location = useLocation();
    const isActive = (path) => location.pathname === path ? styles.ActiveLink : '';

    return (
        <div>
            <h3 className={styles.Title}>Navegación</h3>
            <ul className={`${styles.Links} ${styles.LinkTextContainer}`}>
                <li className={`${styles.LinkText} ${isActive('/home')}`}>
                    <Link to="/home" className={styles.Clean}>Home</Link>
                </li>
                    
                <li className={`${styles.LinkText} ${isActive('/quiz-config')}`}>
                    <Link to="/quiz-config" className={styles.Clean}>Quiz</Link>
                </li>

                <li className={`${styles.LinkText} ${isActive('/about')}`}>
                    About
                </li>
            </ul>
        </div>
    );
}

function LinksIcons({ data }){
    return (
        <div>
            <h3 className={styles.Title}>{data.title}</h3>
            <ul className={`${styles.Links} ${styles.LinkIconContainer}`}>
                {data.links.map((text) => (
                    <li key={text}>{text}</li>
                ))}
            </ul>
        </div>
    );
}

export default Footer;