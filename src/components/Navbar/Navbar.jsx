import { Link } from 'react-router-dom'
import './Navbar.css'
function Navbar() {
    return (
        <div>
            <ul className="nav-links">
                <li className="logo">
                    <a href="#">
                        <img className='logo-img' src="logo.png" alt="Logo" />
                    </a>
                </li>
                <li className="center">
                    <Link to="/">Quizzes</Link>
                </li>
                <li className="upward">
                    <Link to="/about">About</Link>
                </li>
                <li className="forward">
                    <Link to="/dashboard">Geography</Link>
                </li>
                <li className="forward">
                    <Link to="/jbkjk">Feedback</Link>
                </li>
                <li className="forward">
                    <Link to="/dhashboard">Feedback</Link>
                </li>
            </ul>
        </div>
    )
}

export default Navbar