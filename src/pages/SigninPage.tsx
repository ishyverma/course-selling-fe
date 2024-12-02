import { useEffect, useRef, useState } from "react"
import { Navbar } from "../components/Navbar"
import axios from "axios"
import { EyeClose } from "../icons/EyeClose"
import { EyeOpen } from "../icons/EyeOpen"
import { Link, useNavigate } from "react-router-dom"

export const SigninPage = () => {
    const isLoggedIn = localStorage.getItem("token") ? true : false
    const navigate = useNavigate()
    const [show, setShow] = useState(false)
    const emailRef = useRef<HTMLInputElement>()
    const passwordRef = useRef<HTMLInputElement>()
    function signin() {
        axios.post("http://localhost:3000/api/v1/user/signin", {
            email: emailRef.current.value,
            password: passwordRef.current.value
        }).then(response => {
            alert("Logged In")
            localStorage.setItem("token", response.data.token)
        }).then(() => navigate("/course")).catch(err => alert(err.message))
    }
    useEffect(() => {
        if (isLoggedIn) {
            navigate("/course")
            return
        }
    }, [])
    return <div>
        <Navbar />
        <div className="mt-16 flex justify-center items-center h-[80vh]">
            <div className="bg-gradient-to-b from-[#161821] to-[#1C2234] rounded-2xl p-6">
                <div className="text-center">
                    <span className="text-white font-satoshi text-3xl font-medium">Welcome to </span>
                    <span className="text-transparent bg-clip-text bg-gradient-to-t from-[#2456dc] to-[#5091f2] font-satoshi text-3xl font-bold">100xDevs</span>
                </div>
                <div className="text-center">
                    <span className="text-[#9B9CA0] font-satoshi text-lg font-extralight">Log in to access paid content!</span>
                </div>
                <div className="mt-8">
                    <label htmlFor="email" className="text-white text-sm">Email</label> <br />
                    <input ref={emailRef} className="bg-[#222735] text-white outline-none font-satoshi py-2 px-2 w-full rounded-md text-sm mt-1" placeholder="name@example.com" type="text" id="email" required />
                </div>
                <div className="mt-6">
                    <label htmlFor="password" className="text-white text-sm">Password</label> <br />
                    <div className="relative text-[#9B9CA0]">
                        <input ref={passwordRef} className="bg-[#222735] text-white outline-none font-satoshi py-2 px-2 w-full rounded-md text-sm mt-1" placeholder="••••••••" type={show ? "text" : "password"} id="password" required />
                        <div className="absolute top-4 left-[280px] cursor-pointer" onClick={() => setShow(!show)}>
                            {show ? <EyeClose /> : <EyeOpen />}
                        </div>
                    </div>
                </div>
                <div className="text-white font-satoshi text-sm flex gap-2 mt-4 justify-end">
                    <span>Not Signed In?</span>
                    <div className="cursor-pointer underline text-[#4481EC] font-medium">
                        <Link to={"/signup"}>Sign Up</Link>
                    </div>
                </div>
                <div className="mt-4">
                    <button onClick={signin} className="flex justify-center gap-1 content-center bg-gradient-to-t from-[#2456dc] to-[#5091f2] text-white font-satoshi text-sm hover:to-[#4477C6] hover:from-[#1E47B2] hover:text-[#E1E2E4] py-3 px-6 rounded transition-all w-full">
                        Login
                    </button>
                </div>
            </div>
        </div>
    </div>
}