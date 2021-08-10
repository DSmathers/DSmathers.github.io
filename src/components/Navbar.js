import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav id="navbar">
            <Link to="/" id="logo">&lt;DS /&gt;</Link>
        <ul id="page_nav_list">
            <Link to="/About" className="page_nav">About</Link>
            <Link to="/Projects" className="page_nav">Projects</Link>
            <Link to="/Contact" className="page_nav">Contact Me</Link>
            </ul>
        </nav>
      
    )
}

export default Navbar
