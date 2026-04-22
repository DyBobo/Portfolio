import QRCodeComponent from '../Components/QRCodeComponent';

const skills = [
  {
    category: '🔐 Sécurité',
    items: ['RGPD', 'Gouvernance des risques', 'SSI', 'Analyse de risques', 'ISO 27001'],
  },
  {
    category: '📡 Réseaux & Systèmes',
    items: ['TCP/IP', 'Active Directory', 'VLAN', 'VPN', 'Firewall', 'Linux', 'Windows Server'],
  },
  {
    category: '🛠 Outils',
    items: ['VS Code', 'Microsoft Purview', 'Wireshark', 'GitHub', 'Moqups'],
  },
  {
    category: '💻 Développement',
    items: ['JavaScript', 'HTML/CSS', 'Git'],
  },
];

const About = () => {
  return (
    <div className="about-container">
      <div className="about-header">
        <h1>À Propos</h1>
        <div className="home-divider"></div>
      </div>

      <div className="about-content">
        <div className="about-left">
          <div className="about-bio">
            <h2>Dylan BOLADO</h2>
            <p className="about-role">
              Étudiant M2I L3 — Sécurité Systèmes &amp; Réseaux<br />
              Alternant Gouvernance des Risques &amp; RGPD chez Monext
            </p>
            <p>
              Issu d'un BTS SIO option SISR, j'ai une solide base en systèmes et réseaux
              que j'ai renforcée au fil de mes expériences professionnelles. Aujourd'hui
              en alternance chez Monext, je me spécialise dans la gouvernance des systèmes
              d'information, la conformité RGPD et la gestion des risques.
            </p>
            <p>
              Mon parcours atypique — de l'armée à la cybersécurité — m'a forgé une
              approche terrain, rigoureuse et orientée résultats. Je m'intéresse
              particulièrement à la protection des données, à la sécurité des
              infrastructures et aux enjeux de conformité en entreprise.
            </p>

            <div className="about-links">
              <a
                href="https://github.com/DyBobo"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/dylan-bolado-56742426b/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <div className="about-skills">
            <h3>Compétences</h3>
            <div className="skills-grid">
              {skills.map((group, i) => (
                <div key={i} className="skills-group">
                  <h4>{group.category}</h4>
                  <div className="skills-badges">
                    {group.items.map((skill, j) => (
                      <span key={j} className="badge-tech">{skill}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="about-right">
          <div className="about-qr">
            <h3>Mon contact en 1 scan</h3>
            <QRCodeComponent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;