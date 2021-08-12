const ProjectCard = ({projects}) => {
    return (
        <>
        {projects.map((project) => {
            const {title, img, description, gitLink, demoLink} = project;
            return (
                <div className="project_card">
                    <div className="project_image" style={{backgroundImage: "url(" + img + ")"}}>
                       {/* Project Image Div uses a background image, left empty */}
                    </div>
                    <div className="card_data">
                        <div className="card_title">
                            <h4>{title}</h4>
                        </div>
                        <div className="card_details">
                            <p>{description}</p>
                        </div>
                        <div className="card_links">
                            <a href={gitLink} target="_blank" className="cardLink">GitHub</a>
                            <a href={demoLink} target="_blank" className="cardLink">Demo Site</a>
                        </div>
                    </div>
                </div>
            );
        })}
        </>
    )
}
export default ProjectCard
