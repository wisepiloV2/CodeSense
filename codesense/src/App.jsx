import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Welcome from './pages/Welcome/Welcome';
import Layout from './components/Layout';
import Home from './pages/Home/Home';
import QuizOptions from './pages/QuizOptions/QuizOptions';
import Quiz from './pages/Quiz/Quiz'

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

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        
        <Route 
          path='/home' 
          element={
            <Layout>
              <Home />
            </Layout>
          } 
        />

        <Route 
          path='/quiz-options' 
          element={
            <Layout>
              <QuizOptions />
            </Layout>
          } 
        />

        <Route 
          path='/quiz' 
          element={
            <Layout>
              <Quiz data={data}/>
            </Layout>
          } 
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;