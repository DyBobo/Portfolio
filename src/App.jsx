import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Importation des Pages (Vérifie bien les majuscules sur ton ordinateur !)
import Home from './Pages/Home';
import About from './Pages/About';
import Projects from './Pages/Projects';
import ProjectDetail from './Pages/ProjectDetail'; // Nouveau : pour le bonus
import Contact from './Pages/Contact';
import NotFound from './Pages/NotFound';

// Importation des Composants
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import ScrollToTop from './Components/ScrollToTop'; // Nouveau : pour le scroll auto

function App() {
  return (
    <Router>
      {/* 1. Le ScrollToTop doit être placé ici pour fonctionner sur toutes les pages */}
      <ScrollToTop />

      {/* 2. La Navbar reste fixe en haut */}
      <Navbar />

      <main style={{ padding: '20px', minHeight: '80vh' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          
          {/* 3. Route Bonus : Détail d'un projet local */}
          <Route path="/projects/:id" element={<ProjectDetail />} />
          
          <Route path="/contact" element={<Contact />} />
          
          {/* 4. Page 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
    </Router>
  );
}

export default App;