import { useState, useEffect } from 'react';
import localProjects from '../Data/projects.json';
import ProjectCard from '../Components/ProjectCard';

const Projects = () => {
  const [githubProjects, setGithubProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState('');
  const [activeFilter, setActiveFilter] = useState('Tous');
  const [sortOrder, setSortOrder] = useState('recent');

  const githubUsername = 'DyBobo';

  const fetchGithub = () => {
    setLoading(true);
    setError(null);
    fetch(`https://api.github.com/users/${githubUsername}/repos?per_page=30&sort=updated`)
      .then((res) => {
        if (!res.ok) throw new Error('Erreur GitHub');
        return res.json();
      })
      .then((data) => {
        setGithubProjects(data.filter((repo) => !repo.fork));
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  };

  useEffect(() => { fetchGithub(); }, []);

  // Anti-doublon : JSON prioritaire
  const localTitles = localProjects.map((p) => p.title.toLowerCase());
  const filteredGithub = githubProjects.filter(
    (repo) => !localTitles.includes(repo.name.toLowerCase())
  );

  const allProjects = [
    ...localProjects.map((p) => ({ ...p, source: 'local' })),
    ...filteredGithub.map((r) => ({ ...r, source: 'github' })),
  ];

  // Catégories : Tous, Web, Design uniquement
  const categories = ['Tous', 'Web', 'Design'];

  const byCategory = allProjects.filter((p) => {
    if (activeFilter === 'Tous') return true;
    if (activeFilter === 'Design') {
      const techs = (p.technologies || (p.language ? [p.language] : []));
      return techs.some((t) =>
        ['figma', 'moqups', 'ui/ux', 'design'].includes(t.toLowerCase())
      ) || p.type === 'Design';
    }
    if (activeFilter === 'Web') {
      const techs = (p.technologies || (p.language ? [p.language] : []));
      return techs.some((t) =>
        ['javascript', 'typescript', 'react', 'html', 'css', 'vue', 'next'].includes(t.toLowerCase())
      ) || p.source === 'github';
    }
    return true;
  });

  const bySearch = byCategory.filter((p) => {
    const q = search.toLowerCase();
    const title = (p.title || p.name || '').toLowerCase();
    const techs = (p.technologies || (p.language ? [p.language] : [])).join(' ').toLowerCase();
    return title.includes(q) || techs.includes(q);
  });

  const sorted = [...bySearch].sort((a, b) => {
    if (sortOrder === 'alpha') {
      return (a.title || a.name || '').localeCompare(b.title || b.name || '');
    }
    const dateA = a.updated_at ? new Date(a.updated_at) : new Date(0);
    const dateB = b.updated_at ? new Date(b.updated_at) : new Date(0);
    return dateB - dateA;
  });

  return (
    <div className="projects-page">
      <h1>Mes Projets</h1>
      <div className="home-divider"></div>

      <div className="projects-toolbar">
        <input
          type="text"
          placeholder="Rechercher par nom ou techno..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search-bar"
        />
        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          className="sort-select"
        >
          <option value="recent">Plus récents</option>
          <option value="alpha">Alphabétique</option>
        </select>
      </div>

      <div className="filter-tabs">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`filter-tab ${activeFilter === cat ? 'active' : ''}`}
            onClick={() => setActiveFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {loading ? (
        <div className="projects-loading">
          <div className="spinner"></div>
          <p>Chargement des projets GitHub...</p>
        </div>
      ) : error ? (
        <div className="projects-error">
          <p>Impossible de charger les projets GitHub : {error}</p>
          <button onClick={fetchGithub} className="btn-primary">Réessayer</button>
        </div>
      ) : sorted.length === 0 ? (
        <p className="projects-empty">Aucun projet ne correspond à votre recherche.</p>
      ) : (
        <div className="projects-grid">
          {sorted.map((project) => (
            <ProjectCard key={project.id || project.node_id} project={project} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Projects;