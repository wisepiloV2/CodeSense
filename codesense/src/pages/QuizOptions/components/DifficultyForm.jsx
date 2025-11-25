import styles from './DifficultyForm.module.css'

function DifficultyForm ({ difficulty, setDifficulty }) {
  return (
    <div>
      <label className={styles.label}>Dificultad</label>
      <div className={styles.group}>
        {['básico', 'intermedio', 'avanzado'].map((level) => (
          <button
            key={level}
            type="button"
            className={`${styles.btn} ${difficulty === level ? styles.active : ''}`}
            onClick={() => setDifficulty(level)}
          >
            {level.charAt(0).toUpperCase() + level.slice(1)}
          </button>
        ))}
      </div>
    </div>
  );
};

export default DifficultyForm;

