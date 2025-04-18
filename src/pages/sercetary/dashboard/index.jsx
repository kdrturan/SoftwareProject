import Lessons from "../../../components/lessons/index.jsx";
import { SECRET_ANNOUNCED_LIST } from "../../../utils/secretary-announced-list/index.js";
import { COURSES_LIST } from "../../../utils/student-course-list/index.js";

export default function SecretaryDashboard() {
    return (
        <>
            <Lessons
                title="Announced Lessons"
                lessons={SECRET_ANNOUNCED_LIST}
                grade={false}
                resitGrade={false}
            />

            <div className='bg-white mt-8 rounded-xl min-h-[410px] flex items-center justify-center'>
                <div className='flex flex-col gap-y-5 w-[300px]'>
                    <select className='pb-4 border-b border-zinc-300'>
                        {COURSES_LIST.map((item, index) => (
                            <option key={index} value={index}>{item.title}</option>
                        ))}
                    </select>

                    <input
                        type='date'
                        className='appearance-none w-full px-4 py-2 border border-zinc-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-zinc-700 cursor-pointer transition duration-200 ease-in-out'
                    />

                    <button className='w-full cursor-pointer text-[#702DFF] bg-[#e2d5ff] h-[31px] rounded-2xl flex items-center justify-center text-[12px] font-medium'>
                        Announce Resit
                    </button>
                </div>
            </div>
        </>
    );
}
