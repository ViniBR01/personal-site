import React from 'react';
import './projects.css';
import projects from './projectsData';
import Title from '../../components/Title/Title';
import Card from './Card';

function Projects() {
    const projectsList = [...projects];
    
    return (
        <div className="page-wrapper-projects">
            <Title title_text="Projects" />

            <div className="project-cards-container" >
                {
                projectsList.map((project, index) =>
                <Card
                    title={ project.title }
                    avatar={ project.avatar }
                    text={ project.text }
                    badges={ project.badges }
                    link={ project.link }
                />
                )
                }
                
            </div>
        </div>
    );
}

export default Projects;
