import ProjectCard from "./ProjectCard"
import ProjectData from './ProjectData'

const Projects = () => {
    return (
        <section id="portfolio-section" className="page_section">
            <div className="section_wrapper">
                <div className="section_header">
                    <h1>My Recent Work</h1>
                </div>
                <div id="projects-grid"> 
                <ProjectCard />
                </div>
            </div>
        </section>
    )
}

export default Projects

