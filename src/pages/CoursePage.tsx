import { useEffect } from "react"
import { CourseCard } from "../components/CourseCard"
import { Navbar } from "../components/Navbar"
import { useNavigate } from "react-router-dom"

export const CoursePage = () => {
    const navigate = useNavigate()
    const isLoggedIn = localStorage.getItem("token") ? true : false
    useEffect(() => {
        if (!isLoggedIn) {
            navigate("/signup")
        }
    })
    return <div>
        <Navbar />
        <CourseCard />
    </div>
}