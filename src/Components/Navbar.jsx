import { NavLink } from 'react-router-dom';
import githubLogo from '../assets/github.png';
import linkedinLogo from '../assets/linkedin.png';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left"></div>

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

      <div className="navbar-right">
        <a
          href="https://github.com/DyBobo"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
          title="GitHub"
        >
          <img src={githubLogo} alt="GitHub" className="social-icon" />
        </a>
        <a
          href="https://www.linkedin.com/in/dylan-bolado-56742426b/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
          title="LinkedIn"
        >
          <img src={linkedinLogo} alt="LinkedIn" className="social-icon linkedin-icon" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;