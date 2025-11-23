import { useState } from 'react';
import styles from './QuizConfig.module.css'


const QuizConfig = () => {
  const [category, setCategory] = useState('');
  const [difficulty, setDifficulty] = useState('medium');
  const [questions, setQuestions] = useState(10);
  const MAX_QUESTIONS = 20;

  return (
    <div className={styles.FormContainer}>
      <h1 className={styles.FormTitle}>Personaliza tu propio Quiz</h1>
      {/*Categorias */}
      <div>
        <label className={styles.FormLabel}>Tecnologias</label>
        <div>
          <select 
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            >
            <option value="" disabled>Selecciona una tecnología...</option>
            <option value="react">React: Hooks & Patterns</option>
            <option value="docker">Docker: Containerization</option>
            <option value="git">Git: Flujos de Trabajo Avanzados</option>
            <option value="js">JavaScript: ES6+ & Async</option>
          </select>
        </div>
      </div>
      {/*Dificultad */}
      <div>
        <label className={styles.FormLabel}>Nivel de Dificultad</label>
        <div>
        {['básico', 'intermedio', 'avanzado'].map((level) => (
          <button
            key={level}
            type="button"
            onClick={() => setDifficulty(level)}
            >
            <span>
              {level}
            </span>
          </button>
        ))}
        </div>
      </div>
      {/* Cantidad (Slider) */}
      <div>
        <div>
          <label className={styles.FormLabel}>Cantidad de Preguntas</label>
          <span>
            {questions} <span>/ {MAX_QUESTIONS}</span>
          </span>
        </div>
        <div>
          <div 
            style={{ width: `${(questions / MAX_QUESTIONS) * 100}%` }}
          ></div>
          <input 
            type="range" 
            min="1" 
            max={MAX_QUESTIONS} 
            value={questions}
            onChange={(e) => setQuestions(Number(e.target.value))}
          />
          {/*el circulito que arrastras*/}
          <div 
            style={{ left: `${(questions / MAX_QUESTIONS) * 100}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default QuizConfig;