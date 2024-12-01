import { useEffect, useState } from "react"
import { Message } from "../icons/Message"
import { PlayButton } from "../icons/PlayButton"
import axios from "axios"
import { Button } from "../ui/Button"

export const CourseCard = () => {
    const [courses, setCourses] = useState([])
    function course() {
        axios.get("http://localhost:3000/api/v1/user/preview")
        .then(response => {
            setCourses(response.data.courses)
        })
    }
    useEffect(() => {
        course()
    }, [])
    
    return <div className="mt-28 flex px-14 flex-wrap gap-x-32">
        {courses.map(course => <div className="mt-4">
            <div className="border border-[#1F2937] rounded-lg w-[25vw]">
                <div className="cursor-pointer">
                    <img className="rounded-t-lg" width={375} src={`${course.imageUrl}`} alt="img-1" />
                </div>
                <div className="mt-4 ml-[14px]">
                    <span className="text-white font-satoshi ml-4 font-medium text-base">{course.title}</span>
                </div>
                <div className="mt-2 ml-4 flex mb-4">
                    <button className="flex gap-2 m-auto bg-white text-black hover:bg-[#E1E2E4] font-satoshi text-xs font-medium px-7 rounded py-3 items-center">
                        <PlayButton /> View Course
                    </button>
                    <button className="flex items-center gap-2 m-auto text-white hover:underline font-satoshi text-xs font-medium px-7 rounded py-3">
                        <Message />Join Discord
                    </button>
                </div>
            </div>
        </div>)}
        <div className="mt-4 hover:-translate-y-2 transition-all">
            <div className="bg-[#15161D] border-[#1F2937] rounded-lg w-[25vw] p-12 border h-[303px] flex justify-center items-center text-center">
                <div>
                    <div>
                        <span className="text-white font-satoshi text-xl font-medium">Don't see your courses?</span>
                    </div>
                    <div className="mt-2">
                        <span className="text-[#CBCCCF] font-satoshi text-sm font-normal">Try refreshing the database. If you are still facing issues? <span className="underline">Contact us</span></span>
                    </div>
                    <div className="mt-2">
                        <Button variant="secondary" text="Refresh Database" onClick={course} />
                    </div>
                </div>
            </div>
        </div>
    </div>
}