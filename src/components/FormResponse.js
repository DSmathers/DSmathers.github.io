import { FaLinkedin, FaFacebookSquare, FaGithub } from "react-icons/fa"

const FormResponse = () => {
    return (
        <div className="form_response" >
            <div className="form_res_wrapper">
            <div className="form_res_header">
                <h1>Thank You!</h1>
                <h6>Your Message Has Been Sent.</h6>
            </div>
            <div className="form_res_message">
                <p>You can find me on Social Media by clicking on the icons below.</p>
            </div>
            <div className="form_res_links">
                <a href="https://www.linkedin.com/in/daniel-smathers-512857183/" target="_blank"><FaLinkedin/></a>
                <a href="http://www.facebook.com/daniel.smathers.7" target="_blank"><FaFacebookSquare/></a>
                <a href="https://github.com/DSmathers" target="_blank"><FaGithub/></a>
            </div>
            
            </div>

        </div>
    )
}

export default FormResponse
