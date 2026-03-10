// 1. On importe le composant QR Code
import QRCodeComponent from '../Components/QRCodeComponent';

const About = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1>👤 À Propos</h1>
      <p>Étudiant en L3 - M2I, passionné par le développement React.</p>
      
      {/* 2. On l'affiche ici */}
      <QRCodeComponent />
    </div>
  );
};

export default About;