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
                <li className="center"><a href="#">Quizzes</a></li>
                <li className="upward"><a href="#">Football</a></li>
                <li className="forward"><a href="#">Geography</a></li>
                <li className="forward"><a href="#">Feedback</a></li>
                <li className="forward"><a href="#">Feedback</a></li>
            </ul>
        </div>
    )
}

export default Navbar