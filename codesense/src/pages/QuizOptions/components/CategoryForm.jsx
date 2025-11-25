import styles from './CategoryForm.module.css';

function CategoryForm ({ category, setCategory }) {
  return (
    <div className={styles.container}>
      <label className={styles.label}>Categoría</label>
      <select 
        className={styles.input}
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
  );
};

export default CategoryForm;