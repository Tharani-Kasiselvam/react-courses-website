import { Link, Outlet } from "react-router-dom"
const Courses = () => {
    return (
        <div>
            <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link className="navbar-brand" to="#">Courses</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to="all">All</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="#">Full Stack Development</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="#">Data Science</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="#">Cyber Security</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="#">Careers</Link>
                        </li>
                    </ul>
                </div>
            </nav>
            </div>
            <div>
            <Outlet />
            </div>
        </div>
    )
}

export default Courses