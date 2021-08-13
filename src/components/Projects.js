import React, { useState } from "react"
import ProjectCard from "./ProjectCard"
import Data from './Data'

const Projects = () => {
    const [projects] = useState(Data);
    return (
        <section id="portfolio-section" className="page_section">
            <div className="section_wrapper">
                <div className="projects_body">
                    <h1>My Recent Work</h1>
               
                    <div id="projects-grid"> 
                        <ProjectCard projects={projects}/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects

