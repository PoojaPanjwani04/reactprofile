import logo from './logo.svg';
import './App.css';
import ProfilePage from './pages/ProfilePage';
import ContactMe from './pages/ContactMe';
import Skills from './pages/Skills';
import About from './pages/about';

import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
      <Route path="/" element={<ProfilePage />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<ContactMe />} />
        
        </Routes>
      </Router>
    </div>
  );
}

export default App;
