import React from 'react'
import './ProjectCard.css'
const ProjectCard = ({details}) => {
    const { imageUrl, link } = details;
  return (
    <div className="project-card">
        {imageUrl && (
            <div className="project-image">
                <img src={imageUrl} alt="" />
            </div>
        )}
         <a href={link} target="_blank" rel="noopener noreferrer" className="project-title">
        <h6>{details.title}</h6>
        </a>
        <div className="project-duration">{details.date}</div>

        <ul>
            {details.responsiblities.map((item) => (
                <li key={item}>{item}</li>
            ))}
        </ul>
    </div>
  )
}

export default ProjectCard