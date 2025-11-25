import styles from './AmountForm.module.css';

function AmountForm ({ questions, setQuestions }) {
  const MAX_QUESTIONS = 20;

  return (
    <div>
      <div className={styles.header}>
        <label className={styles.label} style={{marginBottom:0}}>
          Cantidad de Preguntas (Máx. 20)
        </label>
        <div className={styles.counter}>
          {questions} <span className={styles.counterHighlighter}>/ {MAX_QUESTIONS}</span>
        </div>
      </div>

      <div className={styles.trackWrapper}>
        <div className={styles.trackBackground}></div>
        <div 
          className={styles.trackFill}
          style={{ width: `${(questions / MAX_QUESTIONS) * 100}%` }}
        ></div>
        <input 
          type="range" 
          className={styles.input}
          min="1" 
          max={MAX_QUESTIONS} 
          value={questions}
          onChange={(e) => setQuestions(Number(e.target.value))}
        />
        <div 
          className={styles.thumb}
          style={{ left: `${(questions / MAX_QUESTIONS) * 100}%` }}
        ></div>
      </div>
    </div>
  );
};

export default AmountForm;