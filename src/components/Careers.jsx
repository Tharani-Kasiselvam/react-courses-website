import '../App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons/faCheck'

const Careers = () => {
    const careers_list = [
        {
            id: 1,
            role: "Web Development",
            role_avail: "Y",
            role_cout: "6 Open Roles",
            note: [
                "HTML, JS, CSS and PHP code should be in separate files none of the code must co-exist in the same file",
                "Use jQuery to simplify dom manipulations.",
                "Only use Jquery AJAX for interacting with the backend (strictly no usage of form submission).",
                "CSS can be used but the form must be designed in bootstrap in order to maintain page responsiveness.",
                "Use MySql for storing the registered data and MongoDB for Storing the details of the user profiles.",
                "In MySQL always use Prepared Statements, with no usage of simple SQL statements.",
                "The login session should be maintained only using browser localstorage (Do not use PHP Session).",
                "Use Redis to store the session information in the backend.",
                "Don't use more than two fonts and any icons or images should be in SVG format.",
                "Host it on Heroku or AWS.",
                "Upload your files to github and submit below or mail the Github link and Hosted Link to dev@guvi.in"
            ],
            img: ""
        },
        {
            id: 2,
            role: "Graphic Designing",
            role_avail: "N",
            role_cout: "No Open Roles",
            note: [
                "Illustration and vector images must be used",
                "Logo frame rate is 1000 x 1000 pixel",
                "color scheme",
                "#20FC8F (primary)",
                "#14E885 (secondary)",
                "Output should be in jpeg, png, pdf",
                "Multiple entries are appreciable",
                "Don't use more than two fonts",
            ],
            img: ""
        },
        {
            id: 3,
            role: "Video Animation",
            role_avail: "N",
            role_cout: "No Open Roles",
            note: [
                "Use Illustrations and vector images to create the video.",
                "Any professional background score with Non Copy-righted audio should be used as background music",
                "No Voice overs are allowed",
                "Output should be in mp4 with frame rate of 1920 * 1080 P",
                "Multiple entries are appreciated.",
            ],
            img: ""
        }
    ]

    function condnlRole(isRoleavail){
        if(isRoleavail=='Y'){
            return(
                <div>
                <button className='btn btn-success' style={{margin:"10px"}}>Download Task</button>
                <button className='btn btn-success' style={{margin:"10px"}}>Submit</button>
                </div>
            )
        }

        else{
            return(
                <div>
                <button className='btn btn-success' style={{backgroundColor: "#0b0b0b",margin:"10px", color: "lightblue"}} disabled>Download Task</button>
                </div>
            )
        }
    }

    return (
        <div className='career-head' style={{fontFamily:"Shadows Into Light"}}><h1>WE'RE HIRING</h1>
            {careers_list.map(careers =>
                <div className="card w-75" style={{padding:"30px",fontFamily:"Montserrat"}}  key={careers.id}>
                    {/* <p style={{ color: "#A6A7AC" }}><b>{pack_name}</b></p> */}
                    <h3 className="career-card-title"><b>{careers.role}</b></h3>
                    <p className="career-card-text"><h5><b>{careers.role_cout}</b></h5></p>
                    <p className="career-card-text">THINGS TO BE NOTED:<br /><br />
                    
                    {careers.note.map(oneNote => 
                        <p><FontAwesomeIcon icon={faCheck} style={{ color: '#05a305', fontWeight:'bold'}} /> {oneNote}</p>
                    )}
                    {condnlRole(careers.role_avail)}
                    
                    </p>
                </div>
            )}
        </div>
    )
}

export default Careers