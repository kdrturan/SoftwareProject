import {createBrowserRouter} from 'react-router-dom';
import LoginLayout from '../layout/login';
import InstructorLayout from "../layout/instructor/index.jsx";
import LoginPage from "../pages/login/index.jsx";
import Dashboard from "../pages/instructor/dashboard/index.jsx";
import ResistExams from "../pages/instructor/resist-exams/index.jsx";
import Grades from "../pages/instructor/grades/index.jsx";
import StudentLayout from "../layout/student/index.jsx";
import SecretaryLayout from "../layout/secretary/index.jsx";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <LoginLayout/>,
        children: [
            {
                index: true,
                element: <LoginPage/>,
            }
        ]
    },
    {
        path: '/instructor',
        element: <InstructorLayout/>,
        children: [
            {
                index: true,
                element: <Dashboard/>
            },
            {
                path: 'resist-exams',
                element: <ResistExams/>
            },
            {
                path: 'grades',
                element: <Grades/>
            }
        ]
    },
    {
        path: '/student',
        element: <StudentLayout/>,
    },
    {
        path: '/secretary',
        element: <SecretaryLayout/>,
    }
]);

export default routes;
