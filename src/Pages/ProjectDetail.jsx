import { useParams, Link, useNavigate } from 'react-router-dom';
import localProjects from '../Data/projects.json';

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Cherche le projet dans le JSON local
  const project = localProjects.find((p) => String(p.id) === String(id));

  if (!project) {
    return (
      <div className="notfound-container">
        <h1>🔍 Projet introuvable</h1>
        <p>Ce projet n'existe pas ou a été supprimé.</p>
        <Link to="/projects" className="btn-primary">
          ← Retour aux projets
        </Link>
      </div>
    );
  }

  return (
    <div className="project-detail-page">
      <button onClick={() => navigate(-1)} className="btn-back">
        ← Retour
      </button>

      <div className="project-detail-card">
        <h1>{project.title}</h1>
        <div className="home-divider"></div>

        <p className="project-detail-desc">{project.description}</p>

        {project.technologies && (
          <div className="project-detail-techs">
            <h3>🛠 Technologies</h3>
            <div>
              {project.technologies.map((tech, i) => (
                <span key={i} className="badge-tech">{tech}</span>
              ))}
            </div>
          </div>
        )}

        {project.type && (
          <p className="project-detail-type">
            📁 Catégorie : <strong>{project.type}</strong>
          </p>
        )}

        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="btn-primary"
          >
            🔗 Voir le projet
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectDetail;