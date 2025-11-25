import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Welcome from './pages/Welcome/Welcome';
import Layout from './components/Layout';
import Home from './pages/Home/Home';
import QuizOptions from './pages/QuizOptions/QuizOptions';

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

      </Routes>
    </BrowserRouter>
  );
}

export default App;