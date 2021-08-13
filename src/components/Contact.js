import { FaPhone, FaFacebookSquare, FaLinkedin, FaGithub } from 'react-icons/fa'
import {MdEmail} from 'react-icons/md'
import { useForm, ValidationError } from '@formspree/react';
import FormResponse from './FormResponse';


const Contact = () => {
    const [state, handleSubmit] = useForm("xzbykzpl");
    if (state.succeeded)    {
        return <FormResponse />
    }
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
                            <a href="https://www.linkedin.com/in/daniel-smathers-512857183/" target="_blank"><FaLinkedin/></a>
                            <a href="http://www.facebook.com/daniel.smathers.7" target="_blank"><FaFacebookSquare/></a>
                            <a href="https://github.com/DSmathers" target="_blank"><FaGithub/></a>
                        </div>
                        
                    </div>
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <label>Name</label>
                        <input type="text" id="name" name="name" />
                        <label htmlFor="email">Email Address</label>
                        <input id="email" type="email" name="email"/><ValidationError prefix="Email" field="email" errors={state.errors} />
                        <label>Message</label>
                        <textarea id="message" name="message"></textarea><ValidationError prefix="Message" field="message" errors={state.errors} />
                        <button type="submit" disabled={state.submitting}>Submit</button>
                        <p id="my-form-status"></p>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact
