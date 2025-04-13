import {useLocation, useNavigate} from "react-router";
import {useEffect} from "react";

export default function StudentLayout() {

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
        <div>student layout</div>
    )
}