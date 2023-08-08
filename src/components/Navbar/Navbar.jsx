import { Link } from 'react-router-dom'
import './Navbar.css'
import SearchBar from '../SearchBar/searchBar'
function Navbar() {
    return (
        <div>
            <ul className="nav-links">
                <li className="logo">
                    <a href="#">
                        <img className='logo-img' src="logo.png" alt="Logo" />
                    </a>
                </li>
                <li>
                    <SearchBar />
                </li>
                <li className="center">
                    <Link to="/">Quizzes</Link>
                </li>
                <li className="upward">
                    <Link to="/about">About</Link>
                </li>
               
            </ul>
        </div>
    )
}

export default Navbar