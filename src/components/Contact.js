import { FaPhone, FaFacebookSquare, FaLinkedin, FaGithub } from 'react-icons/fa'
import {MdEmail} from 'react-icons/md'


const Contact = () => {
    return (
        <section id="contact-section" className="page_section">
            <div className="section_wrapper">
                <div className="section_header">
                    <h1>Contact Me</h1>
                </div>
                <div className="contact-wrapper">
                    <div className="contact-links">
                        <h4>Contact Info:</h4>
                        <p><FaPhone/></p><p> (541) 841-2441</p>
                        <p><MdEmail /></p><p>dsmathers91@gmail.com</p>

                        <div className="social-links">
                            <a href="http://www.linkedin.com/"><FaLinkedin/></a>
                            <a href="http://www.facebook.com/"><FaFacebookSquare/></a>
                            <a href="http://www.github.com/"><FaGithub/></a>
                        </div>
                        
                    </div>
                    <form className="contact-form">
                        <label>Name</label>
                        <input type="text" />
                        <label>Email</label>
                        <input type="email" />
                        <label>Message</label>
                        <textarea></textarea>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact
