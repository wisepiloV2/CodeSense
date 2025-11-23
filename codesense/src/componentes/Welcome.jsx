import styles from './Welcome.module.css';
import { Link } from 'react-router-dom';

const Welcome = () => {

  return (
    <section className={styles.container}> 
      <h1 className={styles.titulo}> 
          <strong className={styles.strong}>Code Sense:</strong> Entrena tu Solución de Problemas Reales
      </h1>
      <div className={styles.contenido}> 
        <p className={styles.texto}>
          Enfréntate a los errores más comunes de <strong className={styles.strong}>Github</strong>, <strong className={styles.strong}>Docker</strong>, <strong className={styles.strong}>Kubernetes</strong> y más en un entorno simulado de quiz. Aprende <strong>debuggeando</strong>.
        </p>
        <Link to="/home">
          <button className={styles.btn}>
              ¡Empieza el Desafío Ahora!
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Welcome;