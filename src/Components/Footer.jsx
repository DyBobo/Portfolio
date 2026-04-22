import QRCodeComponent from './QRCodeComponent';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <p className="footer-name">Dylan BOLADO</p>
          <p className="footer-sub">
            Étudiant M2I — Sécurité Systèmes &amp; Réseaux<br />
            Alternant Gouvernance des Risques &amp; RGPD chez Monext
          </p>
          <p className="footer-copy">© 2025 — Portfolio L3 M2I</p>
        </div>
        <div className="footer-qr">
          <QRCodeComponent />
        </div>
      </div>
    </footer>
  );
};

export default Footer;