const ProjectCard = ({ project }) => {
  return (
    <div style={{ border: '1px solid #ddd', padding: '15px', borderRadius: '8px', width: '250px' }}>
      <h3>{project.title || project.name}</h3>
      <p>{project.description || "Pas de description disponible."}</p>
      <div style={{ fontSize: '0.8em', color: '#666' }}>
        <strong>Technos :</strong> {project.technologies ? project.technologies.join(', ') : project.language}
      </div>
      <a href={project.link || project.html_url} target="_blank" rel="noreferrer" style={{ display: 'inline-block', marginTop: '10px', color: 'blue' }}>
        Voir le projet
      </a>
    </div>
  );
};

export default ProjectCard;