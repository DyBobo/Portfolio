import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div style={{ textAlign: 'center', padding: '50px 0' }}>
      <h1>Bienvenue sur mon Portfolio Professionnel</h1>
      <p style={{ fontSize: '1.2rem', color: '#666' }}>
        Découvrez mes réalisations et mon parcours de développeur.
      </p>
      <Link to="/projects">
        <button style={{ 
          padding: '15px 30px', 
          fontSize: '1rem', 
          backgroundColor: 'blue', 
          color: 'white', 
          border: 'none', 
          borderRadius: '5px', 
          cursor: 'pointer',
          marginTop: '20px'
        }}>
          Voir mes projets
        </button>
      </Link>
    </div>
  );
};

export default Home;