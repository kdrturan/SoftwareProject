import {INSTRUCTORRIGHTSIDEBARLIST} from "../../utils/sidebar_titles/index.jsx";
import ProfileImage from "../../assets/image/profile.png"
import {COURSES_LIST} from "../../utils/course-list/index.js";

export default function RightSidebar() {
    return (
        <div className='w-[290px] h-screen bg-white py-8 px-6 text-[#202020]'>

            <div className='flex flex-col items-center'>

                <div className='flex items-center justify-between w-full'>
                    <span className='font-medium text-[14px]'>Your Profile</span>
                    <span className='cursor-pointer'>{INSTRUCTORRIGHTSIDEBARLIST[0].icon}</span>
                </div>


                <div className='py-[10px] flex flex-col items-center'>
                    <img src={ProfileImage} className='w-52 h-52 object-cover relative'/>
                    <div className='flex flex-col items-center absolute top-55'>
                        <span className='font-medium text-[14px]'>Good Morning Lider</span>
                        <span className='text-[#7e7e7e] text-[12px] font-medium'>Continue your journey and achieve
                    </span>
                        <span className='text-[#7e7e7e] text-[12px] font-medium'>Your Target</span>
                    </div>

                    <ul className='flex justify-between gap-x-3 pt-4 items-center'>
                        {INSTRUCTORRIGHTSIDEBARLIST.slice(1, 4).map((item, index) => (
                            <li className='cursor-pointer' key={index}>{item.icon}</li>
                        ))}
                    </ul>

                    <div className='pt-9 flex flex-col gap-y-6'>
                        <div>{INSTRUCTORRIGHTSIDEBARLIST[4].icon}</div>

                        <div className='flex items-center justify-between w-full'>
                            <span className='font-medium text-[14px]'>Your Courses</span>
                            <span className='cursor-pointer'>{INSTRUCTORRIGHTSIDEBARLIST[5].icon}</span>
                        </div>

                        <ul className='flex flex-col gap-y-3'>
                            {COURSES_LIST.map((item, index) => (
                                <li className={`cursor-pointer py-1  flex items-center justify-between ${index === COURSES_LIST.length - 1 ? "" : "border-zinc-200 border-b-[0.5px]"}`}
                                    key={index}>
                                    <span className='text-[11px]'>{item.title}
                                    </span>
                                    <span className='flex-shrink px-2 py-1 bg-[#702DFF] rounded-md text-white text-[8px] flex-shrink-0'>Resit Details</span>
                                </li>
                            ))}
                        </ul>

                        <button
                            className='w-full cursor-pointer text-[#702DFF] bg-[#e2d5ff] h-[31px] rounded-2xl flex items-center justify-center text-[12px] font-medium'>
                            See all
                        </button>
                    </div>
                </div>

            </div>
        </div>
    )
}