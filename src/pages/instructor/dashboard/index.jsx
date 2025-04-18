import SearchBar from "../../../components/search-bar/index.jsx";
import UserInformBox from "../../../components/user-inform-box/index.jsx";
import Lessons from "../../../components/lessons/index.jsx";
import {LESSONS_INFO} from "../../../utils/lessons-information/index.js";

export default function InstructorDashboard() {
    return (
        <>
            <div className='w-full flex items-center gap-x-5 justify-between '>
                <SearchBar/>
                <span>
                   <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                        <path
                            d="M7.19999 2.79999H24.8C26.2667 2.79999 27.4667 3.99999 27.4667 5.46665V8.39999C27.4667 9.46666 26.8 10.8 26.1333 11.4667L20.4 16.5333C19.6 17.2 19.0667 18.5333 19.0667 19.6V25.3333C19.0667 26.1333 18.5333 27.2 17.8667 27.6L16 28.8C14.2667 29.8667 11.8667 28.6667 11.8667 26.5333V19.4667C11.8667 18.5333 11.3333 17.3333 10.8 16.6667L5.73333 11.3333C5.06666 10.6667 4.53333 9.46665 4.53333 8.66665V5.59999C4.53333 3.99999 5.73333 2.79999 7.19999 2.79999Z"
                            stroke="#5F5F5F"
                            strokeWidth="1.5"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path d="M14.5733 2.79999L8 13.3333"
                              stroke="#5F5F5F"
                              strokeWidth="1.5"
                              strokeMiterlimit="10"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                        />
                   </svg>
               </span>
            </div>

            <div className='grid grid-cols-3 gap-x-5 pb-5'>
                <UserInformBox title='Design' text='2/8 Passed'/>
                <UserInformBox title='Design' text='2/8 Registered Resit'/>
                <UserInformBox title='Design' text='2/8 Resit Taked'/>
            </div>


            <>
                <Lessons
                    title='Your Lessons'
                    lessons={LESSONS_INFO}
                    grade={true}
                    resitGrade={true}
                    date={false}
                />
            </>


        </>
    )
}