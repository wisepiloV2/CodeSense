import QuizOption from './components/QuizOption'
import styles from './Quiz.module.css'

const data = {
    prompt: 'Un desarrollador intenta construir una imagen y el proceso falla con el error {code} COPY failed: stat /ruta/al/archivo: no such file or directory {code}. ¿Cuál es la causa más probable de este fallo de Nivel 1 y qué comando de diagnóstico debe insertar temporalmente en el Dockerfile para verificarlo?',
    hint: 'El problema está en lo que Docker puede "ver" desde el directorio de ejecución del comando docker build.',
    options: [
        'Causa: El archivo está fuera del Contexto de Construcción o es excluido por {code}.dockerignore{code}. Diagnóstico: Insertar la instrucción {code}RUN ls -lah{code} antes del {code}COPY{code} fallido.', 
        'Causa: El usuario no tiene permisos. Diagnóstico: Ejecutar {code}docker build{code} con {code}sudo{code}.', 
        'Causa: El archivo es demasiado grande. Diagnóstico: Revisar la configuración de recursos del Docker Daemon.', 
        'Causa: El archivo es un enlace simbólico. Diagnóstico: Usar {code}ADD{code} en lugar de {code}COPY{code}.'
    ]
}

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

function Quiz(){
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h3 className={styles.title}>
                    {formatearTexto(data.prompt)}
                </h3>
                <svg className={styles.iconSvg} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path fillRule="evenodd" d="M15.75 4.5a3 3 0 11.825 2.066l-8.421 4.679a3.002 3.002 0 010 1.51l8.421 4.679a3 3 0 11-.729 1.31l-8.421-4.678a3 3 0 110-4.132l8.421-4.679a3 3 0 01-.096-.755zM6.75 12a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0zm9.75-8.25a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0zm0 16.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0z" clipRule="evenodd" />
                </svg>
            </div>
            <div className={styles.options}>
                {data.options.map((option, index) => (
                    <QuizOption 
                        key={index} 
                        title={formatearTexto(option)} 
                    />
                ))}
            </div>
            <div className={styles.btns}>
                <button className={styles.btn}>Pista</button>
                <button className={styles.btn}>Saltar</button>
            </div>
            
        </div>
    );
}

export default Quiz;