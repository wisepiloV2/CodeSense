import { useState } from 'react';
import styles from './QuizOptions.module.css';
import CategoryForm from './components/CategoryForm';
import DifficultyForm from './components/DifficultyForm';
import AmountForm from './components/AmountForm';

function QuizOptions() {
  const [category, setCategory] = useState('');
  const [difficulty, setDifficulty] = useState('intermedio');
  const [questions, setQuestions] = useState(15);

  const handleGenerate = () => {
    console.log({ category, difficulty, questions });
  };

  return (
    <div className={styles.container}>
        <h1 className={styles.title}>Configura tu propio Quiz</h1>

        <CategoryForm 
            category={category} 
            setCategory={setCategory} 
        />
        
        <DifficultyForm 
            difficulty={difficulty} 
            setDifficulty={setDifficulty} 
        />

        <AmountForm 
            questions={questions} 
            setQuestions={setQuestions} 
        />
        
        <button 
          className={styles.btn}
          onClick={handleGenerate}
        >
          Generar Quiz
        </button>
    </div>
  );
};

export default QuizOptions;