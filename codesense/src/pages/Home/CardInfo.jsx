import styles from './CardInfo.module.css'


//Por maneja el icono la card pero deberia ser enviada por el padre home.jsx
const DockerIcon = () => (
    <svg className={styles.CardIconSvg} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <path fillRule="evenodd" d="M15.75 4.5a3 3 0 11.825 2.066l-8.421 4.679a3.002 3.002 0 010 1.51l8.421 4.679a3 3 0 11-.729 1.31l-8.421-4.678a3 3 0 110-4.132l8.421-4.679a3 3 0 01-.096-.755zM6.75 12a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0zm9.75-8.25a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0zm0 16.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0z" clipRule="evenodd" />
    </svg>
);

function CardInfo ({ data }) {
    return (
    <div className={styles.CardContainer}>
        <div className={styles.CardIconContainer}>
            <DockerIcon /> 
        </div>

        <h2 className={styles.CardTitle}>{data.title}</h2>
        
        <p className={styles.CardDescription}>
            {data.description}
        </p>

        <div className={styles.CardMetaInfo}>
            <span>Nivel: {data.lvl}</span>
            <span>Quizzes: {data.numQuizzes}</span>
        </div>

        <button className={styles.CardBtn}>¡Empezar Quiz!</button>
    </div>
    ); 
}

export default CardInfo