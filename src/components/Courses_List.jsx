import { useState } from 'react'
import '../App.css'

const Courses_List = () => {
    const [selectedCourse,setSelectedCourse] = useState("All")
    const courses_list = [
        {
            id: 1,
            title: "FSD",
            course: "Best Full-Stack Development Project Ideas in 2024",
            description: "Isha Sharma",
            date: "25 Mar, 2024",
            duration: "4 Min Read",
            img : "fsd_1.jpg"
        },
        {
            id: 2,
            title: "FSD",
            course: "How Long Would It Take To Be a Full Stack Developer?",
            description: " Meghana D",
            date: "26 Mar, 2024",
            duration: "3 Min Read",
            img : "fsd_2.png"
        },
        {
            id: 3,
            title: "FSD",
            course: "Top 10 Full-Stack Developer Frameworks in 2024",
            description: " Isha Sharma",
            date: "16 Apr, 2024",
            duration: "5 Min Read",
            img : "fsd_3.jpg"
        },
        {
            id: 4,
            title: "DS",
            course: "What is the Difference between Data Science and Data Engineering?",
            description: " Saanchi Bharadwaj",
            date: "25 Mar, 2024",
            duration: "5 Min Read",
            img : "ds_1.png"
        },
        {
            id: 5,
            title: "DS",
            course: "The Roles and Responsibilities of a Data Scientist",
            description: " Jaishree Tomar",
            date: "16 Apr, 2024",
            duration: "6 Min Read",
            img : "ds_2.png"
        },
        {
            id: 6,
            title: "DS",
            course: "10 Best Data Science Frameworks in 20204",
            description: " Isha Sharma",
            date: "13 Dec, 2023",
            duration: "4 Min Read",
            img : "ds_3.png"
        },
        {
            id: 7,
            title: "CYS",
            course: "8 Different types of Cybersecurity and Threats involved",
            description: " Tushar Vinosha",
            date: "08 Sep, 2023",
            duration: "4 Min Read",
            img : "cys_1.png"
        },
        {
            id: 8,
            title: "CYS",
            course: "What is Cyber Security?",
            description: " Tushar Vinosha",
            date: "04 Oct, 2023",
            duration: "4 Min Read",
            img : "cys_2.png"
        },
        {
            id: 9,
            title: "CYS",
            course: "The Ultimate Cybersecurity Roadmap for Beginners",
            description: " Srinithi Sankar",
            date: "23 Mar, 2024",
            duration: "3 Min Read",
            img : "cys_3.png"
        }    
    ]

    return (
        <div>
            <div className="card-deck">
                {courses_list.map(course => {
                    if((course.title!="CRR") && (course.title=="ABC" || selectedCourse=="All")){
                        return (
                <div className="card">
                    <img src={`./${course.img}`} className="card-img-top" alt= {`${course.title}_${course.id}`} />
                        <div className="card-body">
                            <h5 className="card-title">{course.course}</h5>
                            <br /><br />
                            <p className="card-text"><small className="text-muted">By <b>{course.description}</b></small></p>
                            <p className="card-text"><small className="text-muted">By <b>{course.date}</b></small>
                                <small className="text-muted" style={{marginLeft:"80px"}}>{course.duration}</small></p>
                        </div>
                        </div>
                        )
                        }
                    }


                    )}
            </div>
        </div>
    )
}

export default Courses_List