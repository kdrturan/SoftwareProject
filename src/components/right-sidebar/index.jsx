import {INSTRUCTORRIGHTSIDEBARLIST} from "../../utils/sidebar_titles/index.jsx";
import {COURSES_LIST} from "../../utils/student-course-list/index.js";

export default function RightSidebar() {

    const user = localStorage.getItem("user")
        ? JSON.parse(localStorage.getItem("user"))
        : null


    return (
        <div className='w-[290px] h-screen bg-white py-8 px-6 text-[#202020]'>

            <div className='flex flex-col items-center'>

                <div className='flex items-center justify-between w-full'>
                    <span className='font-medium text-[14px]'>Your Profile</span>
                    <span className='cursor-pointer'>{INSTRUCTORRIGHTSIDEBARLIST[0].icon}</span>
                </div>


                <div className='py-[10px] flex flex-col items-center'>

                    <div className="relative w-[120px] h-[120px]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 100 101"
                             fill="none">
                            <path
                                d="M100 50.5C100 78.1142 77.6142 100.5 50 100.5C22.3858 100.5 0 78.1142 0 50.5C0 22.8858 22.3858 0.5 50 0.5C77.6142 0.5 100 22.8858 100 50.5ZM7.35402 50.5C7.35402 74.0527 26.4473 93.146 50 93.146C73.5527 93.146 92.646 74.0527 92.646 50.5C92.646 26.9473 73.5527 7.85402 50 7.85402C26.4473 7.85402 7.35402 26.9473 7.35402 50.5Z"
                                fill="#CCCCCC" fillOpacity="0.3"
                            />
                            <path
                                d="M92.2571 69.4779C94.1096 70.3098 96.2996 69.4861 96.9933 67.5775C100.817 57.0572 101.01 45.5181 97.4784 34.8218C93.5606 22.9578 85.3431 12.9904 74.4437 6.8823C63.5444 0.774224 50.7532 -1.0319 38.5888 1.81957C27.6217 4.39038 17.8806 10.5791 10.9032 19.3319C9.63738 20.9198 10.078 23.2178 11.7546 24.3636C13.4313 25.5094 15.7075 25.0671 16.9934 23.4953C22.9191 16.2523 31.0898 11.1308 40.2671 8.9795C50.6424 6.54743 61.5523 8.08791 70.8485 13.2976C80.1448 18.5073 87.1537 27.0087 90.4952 37.1278C93.4509 46.0785 93.3477 55.7211 90.263 64.5562C89.5936 66.4735 90.4046 68.6459 92.2571 69.4779Z"
                                fill="#702DFF"
                            />
                        </svg>

                        <img src={`https://api.dicebear.com/7.x/adventurer/svg?seed=${user.email}`}
                            alt="Profile"
                            className="absolute top-1/2 left-1/2 w-[85px] h-[85px] object-cover rounded-full transform -translate-x-1/2 -translate-y-1/2"
                        />
                    </div>


                    <div className='flex flex-col items-center mt-4'>
                        <span className='font-medium text-[14px]'>Good Morning {user.email}</span>
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
                                    <span
                                        className='flex-shrink px-2 py-1 bg-[#702DFF] rounded-md text-white text-[8px] flex-shrink-0'>Resit Details</span>
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