import { Link } from 'react-router-dom';

const ProjectCard = ({ project }) => {
  const title = project.title || project.name;
  const description = project.description || 'Pas de description disponible.';
  const techs = project.technologies || (project.language ? [project.language] : []);
  const url = project.link || project.html_url;
  const isLocal = !!project.id && typeof project.id === 'number';
  const stars = project.stargazers_count;
  const updatedAt = project.updated_at
    ? new Date(project.updated_at).toLocaleDateString('fr-FR')
    : null;

  return (
    <div className="project-card">
      <div className="project-card-header">
        <h3 className="project-card-title">{title}</h3>
        {stars !== undefined && (
          <span className="project-stars">⭐ {stars}</span>
        )}
      </div>

      <p className="project-card-desc">{description}</p>

      <div className="project-card-techs">
        {techs.map((tech, i) => (
          <span key={i} className="badge-tech">{tech}</span>
        ))}
      </div>

      {updatedAt && (
        <p className="project-card-date">Mis à jour le {updatedAt}</p>
      )}

      <div className="project-card-links">
        {url && (
          <a
            href={url}
            target="_blank"
            rel="noreferrer"
            className="project-card-link"
          >
            🔗 Voir le projet
          </a>
        )}
        {/* Lien vers la page détail si c'est un projet local */}
        {isLocal && (
          <Link to={`/projects/${project.id}`} className="project-card-link secondary">
            📄 Détails
          </Link>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;