import { NavLink } from 'react-router-dom';
import githubLogo from '../assets/github.png';
import linkedinLogo from '../assets/linkedin.png'; // C'est bien le bon nom !

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Zone gauche vide */}
      <div className="navbar-left"></div>

      {/* Zone centrale (Menu) */}
      <div className="navbar-center">
        <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>
          Accueil
        </NavLink>
        <NavLink to="/projects" className={({ isActive }) => isActive ? "active" : ""}>
          Projets
        </NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>
          À Propos
        </NavLink>
        <NavLink to="/contact" className={({ isActive }) => isActive ? "active" : ""}>
          Contact
        </NavLink>
      </div>

      {/* Zone droite (Logos sociaux) */}
      <div className="navbar-right">
        <a href="https://github.com/DyBobo" target="_blank" rel="noopener noreferrer" className="social-link">
          <img src={githubLogo} alt="GitHub" className="social-icon" />
        </a>
        <a href="https://www.linkedin.com/in/votre-profil-fictif" target="_blank" rel="noopener noreferrer" className="social-link">
          <img src={linkedinLogo} alt="LinkedIn" className="social-icon" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;