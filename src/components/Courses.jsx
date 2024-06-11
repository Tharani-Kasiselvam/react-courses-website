import { createContext, useState } from "react"
import { Link, Outlet } from "react-router-dom"
export const CoursesContext = createContext();
const Courses = () => {
    const [selectedCourse,setSelectedCourse] = useState("All")

    const onNavLinkClick = (e) => {
        console.log(e.target.innerText)
        if(e.target.innerText=="Full Stack Development")
            setSelectedCourse("FSD")

        else if(e.target.innerText=="Data Science")
            setSelectedCourse("DS")

        else if(e.target.innerText=="Cyber Security")
            setSelectedCourse("CYS")

        else if(e.target.innerText=="Careers")
            setSelectedCourse("CRR")

        else if(e.target.innerText=="Courses")
            setSelectedCourse("All")

        else
            setSelectedCourse("All")
    }

    return (
        <div>
            <CoursesContext.Provider value={{selectedCourse}}>
            <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link className="navbar-brand" to="/courses/All" onClick={(onNavLinkClick)}>Courses</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/courses/All" onClick={(onNavLinkClick)}>All</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/courses/FSD" onClick={(onNavLinkClick)}>Full Stack Development</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/courses/DS" onClick={(onNavLinkClick)}>Data Science</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/courses/CYS" onClick={(onNavLinkClick)}>Cyber Security</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/courses/Careers" onClick={(onNavLinkClick)}>Careers</Link>
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