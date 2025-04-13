import {Toaster} from "react-hot-toast";
import {Outlet} from "react-router-dom";


export default function LoginLayout() {
    return (
        <>
            <Toaster position='top-right'/>
            <Outlet/>
        </>
    );
}
