import styles from './Footer.module.css'

const Logo = () => (
    <div className={styles.LogoContainer}>
        <svg className={styles.LogoIcon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L2 7l10 5 10-5-10-5zm0 9l2.5-1.25L12 8.5l-2.5 1.25L12 11zm0 2.5l-5-2.5-5 2.5L12 22l10-8.5-5-2.5-5 2.5z"/>
        </svg>
        <span>Code Sense</span>
    </div>
);

function Footer() {
    return (
        <footer className={styles.Container}>
            <Logo />
            <LinksText data={linksData[0]} />
            <LinksIcons data={linksData[1]} />        
            <p className={styles.CopyRight}>&copy; 2025 Code Sense. Todos los derechos reservados.</p>
        </footer>
    );
}

const linksData = [
    {
        id: 1,
        title: 'Navegación',
        links: ['Home', 'Quiz', 'About']
    },
    {
        id: 2,
        title: 'Redes',
        links: ['Mail', 'Linkedin', 'GitHub']
    }
];

function LinksText({ data }){
    return (
        <div>
            <h3 className={styles.Title}>{data.title}</h3>
            <ul className={`${styles.Links} ${styles.LinkTextContainer}`}>
                {data.links.map((text) => (
                    <li className={styles.LinksText}>{text}</li>
                ))}
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
                    <li>{text}</li>
                ))}
            </ul>
        </div>
    );
}

export default Footer;