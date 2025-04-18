import {createBrowserRouter} from 'react-router-dom';
import LoginLayout from '../layout/login';
import InstructorLayout from "../layout/instructor/index.jsx";
import LoginPage from "../pages/login/index.jsx";
import ResistExams from "../pages/instructor/resist-exams/index.jsx";
import Grades from "../pages/instructor/grades/index.jsx";
import StudentLayout from "../layout/student/index.jsx";
import SecretaryLayout from "../layout/secretary/index.jsx";
import UserDashboard from "../pages/student/dashboard/index.jsx";
import SecretaryDashboard from "../pages/sercetary/dashboard/index.jsx";
import InstructorDashboard from "../pages/instructor/dashboard/index.jsx";

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
                element: <InstructorDashboard/>
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
        children: [
            {
                index: true,
                element: <UserDashboard/>
            }
        ]
    },
    {
        path: '/secretary',
        element: <SecretaryLayout/>,
        children: [
            {
                index: true,
                element: <SecretaryDashboard/>
            }
        ]
    }
]);

export default routes;
