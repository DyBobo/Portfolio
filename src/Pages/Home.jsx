import { Link } from 'react-router-dom';

const timeline = [
  {
    period: 'Sept. 2025 — aujourd\'hui',
    role: 'Alternant Gouvernance des Risques & RGPD',
    place: 'Monext',
    desc: "GSSI & RGPD",
    icon: '🔐',
  },
  {
    period: 'Sept. 2023 — Août 2025',
    role: 'Technicien',
    place: 'SEATPI',
    desc: 'Administrateur systèmes et réseaux.',
    icon: '⚙️',
  },
  {
    period: 'Déc. 2017 — Déc. 2022',
    role: 'Militaire',
    place: 'Armée française',
    desc: "Combattant et pilote blindé",
    icon: '🎖️',
  },
];

const Home = () => {
  return (
    <div className="home-dark">

      <section className="hero-dark">
        <div className="hero-text">
          <h1 className="hero-title">
            De l&apos;armée<br />
            <span className="hero-accent">à la cybersécurité.</span>
          </h1>
          <p className="hero-desc">
            Étudiant en L3 Sécurité Systèmes &amp; Réseaux à M2I, en alternance chez Monext.
            Un parcours atypique, une approche terrain.
          </p>
          <div className="hero-cta">
            <Link to="/projects" className="cta-primary">Voir mes projets</Link>
            <Link to="/about" className="cta-ghost">Mon parcours →</Link>
          </div>
        </div>

        <div className="hero-photo-wrap">
          <div className="hero-photo">
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="Portrait"
              className="hero-img"
            />
          </div>
          <div className="hero-badge">
            <span className="badge-dot"></span>
            Disponible en alternance
          </div>
        </div>
      </section>

      <div className="section-sep"></div>

      <section className="timeline-section">
        <p className="section-label">Parcours</p>
        <h2 className="section-title">Un profil qui sort du lot</h2>
        <div className="timeline">
          {timeline.map((item, i) => (
            <div key={i} className="timeline-item">
              <div className="timeline-left">
                <div className="timeline-icon">{item.icon}</div>
                {i < timeline.length - 1 && <div className="timeline-line"></div>}
              </div>
              <div className="timeline-body">
                <span className="timeline-period">{item.period}</span>
                <h3 className="timeline-role">{item.role}</h3>
                <span className="timeline-place">{item.place}</span>
                <p className="timeline-desc">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default Home;