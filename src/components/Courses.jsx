import { createContext, useState } from "react"
import { Link, NavLink, Outlet } from "react-router-dom"
export const CoursesContext = createContext();
import '../App.css'

const Courses = () => {
    const [selectedCourse, setSelectedCourse] = useState("All")

    const onNavLinkClick = (e) => {
        if (e.target.innerText == "Full Stack Development")
            setSelectedCourse("FSD")

        else if (e.target.innerText == "Data Science")
            setSelectedCourse("DS")

        else if (e.target.innerText == "Cyber Security")
            setSelectedCourse("CYS")

        else if (e.target.innerText == "Careers")
            setSelectedCourse("CRR")

        else if (e.target.innerText == "Courses")
            setSelectedCourse("All")

        else
            setSelectedCourse("All")
    }


    return (
        <div>
            <CoursesContext.Provider value={{ selectedCourse }}>
                <div className="nav-header">
                    <nav className="navbar navbar-expand-lg navbar-light">
                        <Link className="navbar-brand" to="/courses/All" onClick={(onNavLinkClick)}>Courses</Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto" id="nav-all">
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/courses/All"
                                        style={isActive => ({
                                            color: isActive ? "black" : "gray"
                                        })} onClick={(onNavLinkClick)}>All</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/courses/FullStackDevelopment"
                                        style={isActive => ({
                                            color: isActive ? "black" : "gray"
                                        })} onClick={(onNavLinkClick)}>Full Stack Development</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/courses/DataScience"
                                        style={isActive => ({
                                            color: isActive ? "black" : "gray"
                                        })} onClick={(onNavLinkClick)}>Data Science</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/courses/CyberSecurity"
                                        style={isActive => ({
                                            color: isActive ? "black" : "gray"
                                        })} onClick={(onNavLinkClick)}>Cyber Security</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/courses/Careers"
                                        style={isActive => ({
                                            color: isActive ? "black" : "gray"
                                        })} onClick={(onNavLinkClick)}>Careers</NavLink>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
                <div>
                    <Outlet />
                </div>
            </CoursesContext.Provider>
        </div>
    )
}

export default Courses