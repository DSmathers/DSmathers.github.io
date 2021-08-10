import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav id="navbar">
            <Link to="/" id="logo">&lt;DS /&gt;</Link>
        <ul id="page_nav_list">
            <Link to="/About" className="page_nav">About</Link>
            <a href="#projects" className="page_nav">Projects</a> 
            <a href="#contact" class="page_nav">Contact</a> 
            </ul>
        </nav>
      
    )
}

export default Navbar
