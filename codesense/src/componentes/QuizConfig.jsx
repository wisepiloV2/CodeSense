import { useState } from 'react';
import styles from './QuizConfig.module.css';

const QuizConfig = () => {
  const [category, setCategory] = useState('');
  const [difficulty, setDifficulty] = useState('intermedio'); // Default como en la foto
  const [questions, setQuestions] = useState(15);
  const MAX_QUESTIONS = 20;

  return (
    <div className={styles.FormContainer}>
      <h1 className={styles.FormTitle}>Configura tu Quiz Personalizado</h1>
      
      {/* Categoría */}
      <div className={styles.OptionsTec}>
        <label className={styles.FormLabel}>Categoría</label>
        <select 
            className={styles.SelectInput}
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="" disabled>Selecciona tecnología...</option>
            <option value="react">React: Hooks & Patterns</option>
            <option value="docker">Docker: Containerization</option>
            <option value="git">Git: Flujos de Trabajo</option>
            <option value="js">JavaScript: ES6+ & Async</option>
        </select>
      </div>

      {/* Dificultad */}
      <div>
        <label className={styles.FormLabel}>Dificultad</label>
        <div className={styles.DifficultyGroup}>
          {['básico', 'intermedio', 'avanzado'].map((level) => (
            <button
              key={level}
              type="button"
              className={`${styles.DifficultyBtn} ${difficulty === level ? styles.active : ''}`}
              onClick={() => setDifficulty(level)}
            >
              {level.charAt(0).toUpperCase() + level.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Slider de Cantidad */}
      <div>
        <div className={styles.SliderHeader}>
          <label className={styles.FormLabel} style={{marginBottom:0}}>
            Cantidad de Preguntas (Máx. 20)
          </label>
          <div className={styles.Counter}>
            {questions} <span>/ {MAX_QUESTIONS}</span>
          </div>
        </div>

        <div className={styles.SliderTrackWrapper}>
          <div className={styles.TrackBackground}></div>
          <div 
            className={styles.TrackFill}
            style={{ width: `${(questions / MAX_QUESTIONS) * 100}%` }}
          ></div>
          <input 
            type="range" 
            className={styles.RangeInput}
            min="1" 
            max={MAX_QUESTIONS} 
            value={questions}
            onChange={(e) => setQuestions(Number(e.target.value))}
          />
          <div 
            className={styles.Thumb}
            style={{ left: `${(questions / MAX_QUESTIONS) * 100}%` }}
          ></div>
        </div>
      </div>
      <button className={styles.GenerateBtn}>
        Generar Quiz
      </button>
    </div>
  );
};

export default QuizConfig;