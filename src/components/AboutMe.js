import { SiHtml5, SiCss3, SiJavascript, SiReact, SiNodeDotJs } from 'react-icons/si'

const AboutMe = () => {
    
    return (
        <section id="about-me-section" className="page_section">
            <div className="section_wrapper">
                <div className="about_me_body">
                    <h1 id="about_me_head">Hello, I'm Daniel. Nice to meet you.</h1>
                    <p className="about_me_text">
                        My story begins with years of tinkering around with Microsoft Excel and Google Sheets, building "applications" for everything
                        from my personal budget, inventory management in a retail business I ran, data entry, a small scale CRM, and so on.
                        It wasn't until January 2021 that I came accross 
                        <a href="https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-00sc-introduction-to-computer-science-and-programming-spring-2011/index.htm" target="_blank" rel="noreferrer"> Introduction to Computer Science and Programming</a> offered by
                        <a href="https://ocw.mit.edu/" target="_blank" rel="noreferrer"> MITOPENCOURSEWARE</a>, which opened my eyes to the world of programming, ultimately leading me to embark on the journey
                        of becoming a developer.
                    </p>
                    <p className="about_me_text">
                        After completion of that course I went on to complete the <a href="https://www.freecodecamp.org/certification/smathers_daniel/responsive-web-design" target="_blank" rel="noreferrer">
                        Responsive Web Design</a> and <a href="https://www.freecodecamp.org/certification/smathers_daniel/javascript-algorithms-and-data-structures" target="_blank" rel="noreferrer">
                        JavaScript Algorithms and Data Structures</a> courses offered by <a href="https://www.freecodecamp.com" target="_blank" rel="noreferrer">freeCodeCamp;</a> as well as two short courses on Udemy on ES6 and React.
                        While I definitely learned a lot, I decided that it would make more sense to learn "on the job" and have since started working towards building applications from the ground up, learning
                        new theories and libraries as I need them instead of all at once.
                    </p>
                </div>
                
                <div className="about_me_footer">
                    <h2>
                        I have experience working with the following tools;
                    </h2>
                    
                      <span id="devIcons_span"><SiHtml5/><SiCss3 /><SiJavascript/><SiReact/><SiNodeDotJs/></span>
                      
                </div>
            </div>    
        </section>
    )
}

export default AboutMe
