const ProjectCard = ({projects}) => {
    return (
        <>
        {projects.map((project) => {
            const {key, title, img, description, gitLink, demoLink} = project;
            return (
                <div className="project_card" key={key}>
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
                            <a href={gitLink} target="_blank" className="cardLink" rel="noreferrer">GitHub</a>
                            <a href={demoLink} target="_blank" className="cardLink" rel="noreferrer">Demo Site</a>
                        </div>
                    </div>
                </div>
            );
        })}
        </>
    )
}
export default ProjectCard
