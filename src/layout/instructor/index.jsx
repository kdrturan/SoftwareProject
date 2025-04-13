import {Toaster} from "react-hot-toast";
import {Outlet} from "react-router-dom";
import RightSidebar from "../../components/right-sidebar/index.jsx";
import LeftSidebar from "../../components/left-sidebar/index.jsx";
import {useEffect} from "react";
import {useLocation, useNavigate} from "react-router";

export default function InstructorLayout() {

    const navigate = useNavigate();
    const location = useLocation();

    const currentSlug = location.pathname.split('/').pop()

    useEffect(() => {
        if (!localStorage.getItem("user")) {
            navigate('/');
        }
    }, []);

    return (
        <>
            <Toaster position='top-right'/>
            <div className='flex'>
                <LeftSidebar/>
                <main className='flex-1 bg-[#fdfdfd] p-8'>
                    <Outlet/>
                </main>
                {currentSlug === 'instructor' ? <RightSidebar/> : ""}
            </div>
        </>
    )
}