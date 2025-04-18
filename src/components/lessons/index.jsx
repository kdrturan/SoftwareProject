export default function Lessons({ title, lessons, grade = true, resitGrade = true, date = true }) {

    return (
        <div className="flex flex-col gap-y-5">
            <span className="font-medium text-xs">{title}</span>

            <div className="overflow-x-auto rounded-xl bg-white">
                <table className="w-full">
                    <thead className="text-sm text-gray-500">
                    <tr>
                        <th className="px-6 py-3 text-left font-medium">Professor</th>
                        <th className={date ? 'px-6 py-3 text-left font-medium' : 'hidden'}>{date ? 'Date' : null}</th>
                        <th className="px-6 py-3 text-left font-medium">Course</th>
                        <th className={grade ? 'px-6 py-3 text-left font-medium' : 'hidden'}>{grade ? 'Grade' : null}</th>
                        <th className={grade ? 'px-6 py-3 text-left font-medium' : 'hidden'}>{resitGrade ? 'Resit Grade' : null}</th>
                        <th className="px-6 py-3 text-left font-medium">Actions</th>
                    </tr>
                    </thead>
                    <tbody className="text-xs">
                    {lessons.map((lesson, index) => (
                        <tr key={index} className='hover:bg-[#f7f7f8]'>
                            <td className="px-6 py-4 flex items-center gap-2">
                                <img src={`https://api.dicebear.com/7.x/adventurer/svg?seed=${lesson.professor}`} className="rounded-full w-6 h-6"/>
                                {lesson.professor}
                            </td>
                            <td  className={`${date ? 'px-6 py-4' : 'hidden'}`}>{date ? lesson.date : null}</td>
                            <td className="px-6 py-4 flex-shrink-0">
                                <span
                                    className="bg-[#e3cfff] text-purple-700 px-2 py-1 rounded-full text-xs">{lesson.course}</span>
                            </td>
                            <td className={`${grade ? 'px-6 py-4' : 'hidden'}`}>{grade ? lesson.grade : null}</td>
                            <td className={`${grade ? 'px-6 py-4' : 'hidden'}`}>{resitGrade ? lesson.resit_grade : null}</td>
                            <td className="px-6 py-4">
                                <button className="text-green-700 cursor-pointer bg-[#d4e9d2] px-3 py-1 rounded-full text-xs">Resit
                                    Details
                                </button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
