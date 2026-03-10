import { Link } from 'react-router-dom';
const NotFound = () => {
  return <div><h1>404 - Page non trouvée</h1><Link to="/">Retourner à l'accueil</Link></div>;
};
export default NotFound;