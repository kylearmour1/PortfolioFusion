import React from 'react';

function Project({ title, imageUrl, deployedUrl, githubUrl }) {
  return (
    <div className="portfolio-project">
      <h3 className="project-title">{title}</h3>
      <a href={deployedUrl} target="_blank" rel="noopener noreferrer">
        <img src={imageUrl} alt={title} className="project-image" />
      </a>
      <div className="project-links">
        {deployedUrl && (
          <a href={deployedUrl} className="project-link" target="_blank" rel="noopener noreferrer">
            Deployed Application
          </a>
        )}
        <a href={githubUrl} className="project-link" target="_blank" rel="noopener noreferrer">
          GitHub Repository
        </a>
      </div>
    </div>
  );
}

export default Project;