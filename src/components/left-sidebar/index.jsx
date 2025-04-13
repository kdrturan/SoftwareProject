import Logo from "../../assets/image/Star 6@2x.png";
import {INSTRUCTORSIDEBARLIST} from "../../utils/sidebar_titles/index.jsx";
import {useLocation, useNavigate} from "react-router";
import classNames from "classnames";
import toast from "react-hot-toast";

export default function LeftSidebar() {
    const navigate = useNavigate();
    const location = useLocation();

    const handleLogout = () => {
        localStorage.removeItem('user')
        toast.success('Logout successfully');
        navigate('/')
    }

    return (
        <aside className="flex flex-col h-screen w-[270px] shadow-lg py-8">
            <div className="flex flex-col gap-y-12 flex-grow">
                <div className="flex items-center gap-x-[9px] px-8">
                    <div className="w-[40px] h-[40px] bg-[#702DFF] rounded-full flex items-center justify-center">
                        <img src={Logo} className="w-5 h-5" alt="Logo"/>
                    </div>
                    <span className="text-[16px] font-extrabold text-[#702DFF]">GRADESYNC</span>
                </div>

                <div className="flex flex-col">
                    <span className="font-semibold text-[16px] pb-[10px] py-2 px-8">OVERVIEW</span>
                    <ul className="flex flex-col gap-y-2 px-6">
                        {INSTRUCTORSIDEBARLIST.slice(0, 3).map((item, index) => {
                            const isActive = location.pathname === `${item.slug}`;

                            return (
                                <li
                                    key={index}
                                    onClick={() => navigate(`${item.slug}`)}
                                    className={classNames('flex items-center gap-x-2 py-2 cursor-pointer transition duration-300 ease-in-out px-2',
                                        {'bg-[#f7f7f8] rounded-md block': isActive}
                                    )}
                                >
                                    <span>{item.icon}</span>
                                    <span className="font-medium text-[14px] text-[#202020]">{item.label}</span>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>

            <div className="px-8 py-4">
                <div onClick={() => handleLogout()} className='flex items-center gap-x-2 cursor-pointer'>
                    <span>{INSTRUCTORSIDEBARLIST[3].icon}</span>
                    <span className="font-medium text-[14px] text-[#F13E3E]">{INSTRUCTORSIDEBARLIST[3].label}</span>
                </div>
            </div>
        </aside>
    );
}
