import { SiHtml5, SiCss3, SiJavascript, SiReact, SiNodeDotJs } from 'react-icons/si'

const AboutMe = () => {
    return (
        <section id="about-me-section" className="page_section">
            <div className="section_wrapper">
            <div className="section_header">
                <h1>Hello World</h1>
            </div>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto nam praesentium
                    ut illo officia tempore dicta asperiores eius neque recusandae quis adipisci repellat 
                    eaque dolor, voluptatibus quidem! Numquam perspiciatis, autem fuga officiis alias suscipit 
                    aut ducimus incidunt reprehenderit ipsa expedita unde. Quos nulla unde soluta? 
                    Sequi aspernatur sed quibusdam soluta.
                </p>
                <h2>
                    I have experience working with the following tools;
                </h2>
                <div id="devIcons">
                    <span id="devIcons_span"><SiHtml5/> <SiCss3 /> <SiJavascript/> <SiReact/> <SiNodeDotJs/></span>
                    
                </div>
            </div>    
        </section>
    )
}

export default AboutMe
