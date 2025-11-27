import styles from './QuizOption.module.css'

function QuizOption({ title }) {
    return (
        <details className={styles.details}>
            <summary className={styles.summary}>
                {title}
            </summary>
            <div className={styles.content}>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Magnam nesciunt a vel tempora similique.
                </p>
            </div>
        </details>
    );
}

export default QuizOption;