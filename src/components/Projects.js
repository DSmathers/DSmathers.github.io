import React, { useState } from "react"
import ProjectCard from "./ProjectCard"
import Data from './Data'

const Projects = () => {
    const [projects, setProject] = useState(Data);
    return (
        <section id="portfolio-section" className="page_section">
            <div className="section_wrapper">
                <div className="section_header">
                    <h1>My Recent Work</h1>
                </div>
                <div id="projects-grid"> 
                <ProjectCard projects={projects}/>
                </div>
            </div>
        </section>
    )
}

export default Projects

