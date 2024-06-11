import { createContext, useState } from "react"
import { Link, NavLink, Outlet } from "react-router-dom"
export const CoursesContext = createContext();
import '../App.css'

const Courses = () => {
    const [selectedCourse, setSelectedCourse] = useState("All")

    // This method is used to maintain the state for the selected course
    const onNavLinkClick = (e) => {

        // capturing the innerText of the selected course and setting it to the state
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

        //by default All the courses will be listed
        else
            setSelectedCourse("All")
    }


    return (
        <div>
            {/* Created ContextAPI to use the data across different components */}
            <CoursesContext.Provider value={{ selectedCourse }}>
                {/* Navigation with List of Courses in Segment wise */}
                <div className="nav-header">
                    <div className="container-fluid">
                        <nav className="navbar navbar-expand-lg navbar-light">
                            <Link className="navbar-brand" to="/courses/All" onClick={(onNavLinkClick)}>Courses</Link>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>

                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                {/* Defined styles to highlight the selected Nav item with a color and underline */}
                                <ul className="navbar-nav" id="nav-all">
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
                </div>
            </CoursesContext.Provider>
        </div>
    )
}

export default Courses