import projectThumb1 from '../assets/thumbnails/projectThumb1.png'
import projectThumb2 from '../assets/thumbnails/projectThumb2.png'

const ProjectCard = () => {
    return (
        <div className="project_card">
            <div className="project_image">
                <img src={projectThumb1} />
            </div>
            <div className="card_data">
                <div className="card_title">
                    <h4>Compound Interest Calculator</h4>
                </div>
                <div className="card_details">
                    <p>Inspired from the compound interest calculator on investor.gov</p>
                </div>
                <div className="card_links">
                    <a href="#" className="cardLink">GitHub</a>
                    <a href="#" className="cardLink">Demo Site</a>
                </div>
            </div>
        </div>
        
    )
}
export default ProjectCard
