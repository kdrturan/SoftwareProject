import {useLocation, useNavigate} from "react-router";
import {useEffect} from "react";
import {Toaster} from "react-hot-toast";
import LeftSidebar from "../../components/left-sidebar/index.jsx";
import {SECRETARYSIDEBARLIST} from "../../utils/sidebar_titles/index.jsx";
import {Outlet} from "react-router-dom";
import RightSidebar from "../../components/right-sidebar/index.jsx";

export default function SecretaryLayout(){

    const navigate = useNavigate();
    const location = useLocation();

    const currentSlug = location.pathname.split('/').pop()
    const user = localStorage.getItem("user")
        ? JSON.parse(localStorage.getItem("user"))
        : null;

    useEffect(() => {
        if (!user) {
            navigate('/');
        }
        if (currentSlug !== user.role) {
            navigate(`/${user.role}`)
        }
    }, []);

    return (
        <>
            <Toaster position='top-right'/>
            <div className='flex'>
                <LeftSidebar SIDEBARLIST={SECRETARYSIDEBARLIST}/>
                <main className='flex-1 bg-[#f9f9fa] p-8 h-screen overflow-y-auto'>
                    <Outlet/>
                </main>
                <RightSidebar/>
            </div>
        </>
    )
}