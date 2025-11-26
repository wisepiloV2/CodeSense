import QuizOption from './components/QuizOption'
import styles from './Quiz.module.css'

const data = {
    prompt: 'Lorem ipsum dolor sit amet consectetur adipisicing elit...',
    options: ['option 1', 'option 2', 'option 3', 'option 4']
}

function Quiz(){
    return (
        <div className={styles.container}>
            <h3>{data.prompt}</h3>

            {data.options.map((option, index) => (
                <QuizOption key={index} title={option} />
            ))}

            <button className={styles.btn}>Saltar</button>
        </div>
    );
}

export default Quiz;