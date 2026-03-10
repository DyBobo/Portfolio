import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{ padding: '10px', borderBottom: '1px solid #ccc', display: 'flex', gap: '15px' }}>
      <NavLink to="/" style={({ isActive }) => ({ color: isActive ? 'blue' : 'black', fontWeight: isActive ? 'bold' : 'normal' })}>Accueil</NavLink>
      <NavLink to="/about" style={({ isActive }) => ({ color: isActive ? 'blue' : 'black', fontWeight: isActive ? 'bold' : 'normal' })}>À Propos</NavLink>
      <NavLink to="/projects" style={({ isActive }) => ({ color: isActive ? 'blue' : 'black', fontWeight: isActive ? 'bold' : 'normal' })}>Projets</NavLink>
      <NavLink to="/contact" style={({ isActive }) => ({ color: isActive ? 'blue' : 'black', fontWeight: isActive ? 'bold' : 'normal' })}>Contact</NavLink>
    </nav>
  );
};

export default Navbar;