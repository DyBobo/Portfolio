import { useState, useEffect } from 'react';
import localProjects from '../Data/projects.json';
import ProjectCard from '../Components/ProjectCard';

const Projects = () => {
  const [githubProjects, setGithubProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  // CHANGE CECI PAR TON VRAI NOM D'UTILISATEUR GITHUB
  const githubUsername = "DyBobo"; 

  useEffect(() => {
    fetch(`https://api.github.com/users/${githubUsername}/repos`)
      .then(response => response.json())
      .then(data => {
        // On ne garde que les projets qui ne sont pas des "forks"
        const filteredData = data.filter(repo => !repo.fork);
        setGithubProjects(filteredData);
        setLoading(false);
      })
      .catch(error => {
        console.error("Erreur GitHub:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h1>💻 Mes Projets</h1>

      {loading ? (
        <p>Chargement des projets...</p>
      ) : (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
          {/* On affiche d'abord les projets locaux du fichier JSON */}
          {localProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}

          {/* On affiche ensuite les projets récupérés sur GitHub */}
          {githubProjects.map(repo => (
            <ProjectCard key={repo.id} project={repo} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Projects;