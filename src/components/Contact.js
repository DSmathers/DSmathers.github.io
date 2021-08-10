const Contact = () => {
    return (
        <section id="contact-section" className="page_section">
            <h1>Contact Me</h1>
            <div className="contact-wrapper">
            <div className="contact-links">
                <h4>Contact Information</h4>
                <p>You can reach me using the links below or simply fill out the form
                    and I will get back to you within 24 hours. </p>
               
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
        </section>
    )
}

export default Contact
