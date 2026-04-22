import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="notfound-container">
      <div className="notfound-code">404</div>
      <h1>Page introuvable</h1>
      <p>Oups ! La page que vous cherchez n'existe pas ou a été déplacée.</p>
      <Link to="/" className="btn-primary">
        🏠 Retourner à l'accueil
      </Link>
    </div>
  );
};

export default NotFound;