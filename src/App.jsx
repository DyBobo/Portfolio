import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Importation de tes pages
import Home from './Pages/Home';
import About from './Pages/About';
import Projects from './Pages/Projects';
import Contact from './Pages/Contact';
import NotFound from './Pages/NotFound';

// Importation de tes composants (on les remplira juste après)
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

function App() {
  return (
    <Router>
      {/* La Navbar est en dehors de Routes car elle doit apparaître sur TOUTES les pages */}
      <Navbar />

      <main style={{ padding: '20px', minHeight: '80vh' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          {/* Le path="*" capture toutes les mauvaises URLs et affiche la 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
    </Router>
  );
}

export default App;