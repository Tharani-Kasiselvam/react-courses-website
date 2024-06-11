import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Courses from "./components/Courses"
import Courses_List from "./components/Courses_List"
import Careers from "./components/Careers"

const App = () => {
  const router = createBrowserRouter([
    {
      path : "/",
      element : <Courses />,
      children : [
        {
          // path : "courses",
          index:"true",
          element : <Courses_List />
        },
        {
          path : "courses/:id",
          element : <Courses_List />
        },
        {
          path : "courses/Careers",
          element : <Careers />
        }
      ]
    },
    {
      path : "/all",
      element : <h1>Display all the courses</h1>
    },
    
  ])


  return <RouterProvider router={router} />
}

export default App