import styles from './Home.module.css';
import CardInfo from './CardInfo';

const quizData = [
    {
        id: 1,
        title: 'Git: Flujos de Trabajo',
        description: 'Domina merge conflicts, rebase, cherry-pick y cómo recuperar código.',
        lvl: 'Intermedio',
        numQuizzes: 5
    },
    {
        id: 2,
        title: 'Docker: Contenedores',
        description: 'Aprende a crear imágenes, gestionar volúmenes y redes.',
        lvl: 'Básico',
        numQuizzes: 3
    }
];


const Home = () => {
    return (
        <>
            <h1 className={styles.MainTitulo}>Elige tu Quiz</h1>
            <p className={styles.MainTexto}>Elige la tecnología que quieras dominar y/o probar.</p>

            <div className={styles.GridContainer}> 

                <CardInfo data={quizData[0]} />
                <CardInfo data={quizData[1]} />

            </div>
        </>
    );
}

export default Home;