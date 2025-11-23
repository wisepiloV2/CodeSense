import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Welcome from './componentes/Welcome'; 
import Home from './componentes/Home';
import QuizConfig from './componentes/QuizConfig';
import Footer from './componentes/Footer';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        
        <Route path="/home" element={<Home />} />

        <Route path="/quiz-config" element={<QuizConfig />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;