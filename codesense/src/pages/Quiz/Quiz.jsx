import QuizOption from './components/QuizOption'
import styles from './Quiz.module.css'

const formatearTexto = (str) => {
    const partes = str.split('{code}');

    return partes.map((parte, index) => {
      if (index % 2 === 1) {
        return (
          <span key={index} className={styles.code}>
            {parte}
          </span>
        );
      }
      return parte;
    });
};

function Quiz({ data }) {
    
    const currentQuestion = 1;
    const totalQuestions = 10;
    const progressPercentage = (currentQuestion / totalQuestions) * 100;

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.topBar}>
                    <span className={styles.counterBadge}>
                        PREGUNTA {currentQuestion} / {totalQuestions}
                    </span>
                </div>
                
                <div className={styles.progressBarContainer}>
                    <div 
                        className={styles.progressBarFill} 
                        style={{ width: `${progressPercentage}%` }}
                    ></div>
                </div>

                <h3 className={styles.title}>
                    {data?.prompt ? formatearTexto(data.prompt) : "Cargando pregunta..."}
                </h3>
            </div>

            <div className={styles.optionsList}>
                {data?.options?.map((option, index) => (
                    <QuizOption 
                        key={index} 
                        title={formatearTexto(option)} 
                    />
                ))}
            </div>

            <div className={styles.btns}>
                <button className={`${styles.btn} ${styles.btnSecondary}`}>
                    Pista
                </button>
                <button className={`${styles.btn} ${styles.btnPrimary}`}>
                    Saltar
                </button>
            </div>
        </div>
    );
}

export default Quiz;