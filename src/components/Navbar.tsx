import { Link, useNavigate } from "react-router-dom"
import { Moon } from "../icons/Moon"
import { Button } from "../ui/Button"
import { Search } from "../icons/Search"
import { Command } from "../icons/Command"
import { Person } from "../icons/Person"
import { useState } from "react"
import { History } from "../icons/History"
import { Bookmark } from "../icons/Bookmark"
import { ChatBubble } from "../icons/ChatBubble"
import { Payout } from "../icons/Payout"
import { Bounty } from "../icons/Bounty"
import { Calendar } from "../icons/Calendar"
import { GithubToggle } from "../icons/GithubToggle"
import { Notion } from "../icons/Notion"
import { NewPage } from "../icons/NewPage"
import { Next } from "../icons/Next"
import { Logout } from "../icons/Logout"

export const Navbar = () => {
    const navigate = useNavigate()
    const [toggle, setToggle] = useState(false)
    const isLoggedIn = localStorage.getItem("token") ? true : false
    function signupNavigate() {
        navigate("/signup")
    }
    function logout() {
        localStorage.removeItem("token")
        navigate("/signin")
    }
    return <div className="fixed top-0 left-0 h-16 border-b z-10 bg-black border-[#222327] w-screen flex justify-center">
        <div className="w-[90%] text-white flex justify-between content-center">
            <div className="self-center flex gap-2">
                <img className="rounded-full" src="https://appx-wsb-gcp.akamai.net.in/subject/2023-01-17-0.17044360120951185.jpg" alt="web" width={38}/>
                <h1 className="cursor-pointer font-satoshi font-extrabold content-center text-transparent bg-clip-text bg-gradient-to-t from-[#2456dc] to-[#5091f2] text-xl">100xDevs</h1>
            </div>
            <div className="flex gap-2 self-center">
                {isLoggedIn && <div className="mr-2 relative text-[#9BA3AF]">
                    <input className="font-satoshi outline-none bg-[#030712] border border-[#1F2937] text-sm py-2 rounded-md px-10" placeholder="Search Anything" type="text" />
                    <div className="absolute top-[9px] left-3">
                        <Search />
                    </div>
                    <div className=" z-20">
                        <div className="absolute top-[8.5px] right-3 flex gap-1 items-center bg-[#1F2937] border border-[#374151] py-[2px] px-1 rounded">
                            <Command />
                            <span className="text-[#9BA3AF] font-satoshi text-[10px]">K</span>
                        </div>
                    </div>
                </div>}
                <div className="flex self-center pr-4 hover:text-[#497EC9] cursor-pointer">
                    <Moon />
                </div>
                {isLoggedIn ? <div className="bg-gradient-to-t cursor-pointer from-[#2456dc] to-[#5091f2] flex justify-center items-center rounded-full h-10 w-10 relative" onClick={() => setToggle(!toggle)}>
                    <Person />
                    {toggle && <div className="absolute top-12 -right-14">
                        <div className="bg-[#171717] w-48 rounded-md border border-[#1F2937] flex flex-col justify-center items-center">
                            <div className="w-[95%] flex flex-col mt-1 mb-1">
                                <div className="hover:bg-[#1F2937] transition-all rounded-md flex justify-start py-2">
                                    <span className="px-2 font-satoshi text-sm flex gap-2 items-center">
                                        <History />Watch history
                                    </span>
                                </div>
                                <div className="hover:bg-[#1F2937] transition-all rounded-md flex justify-start py-2">
                                    <span className="px-2 font-satoshi text-sm flex gap-2 items-center">
                                        <Bookmark />Bookmarks
                                    </span>
                                </div>
                                <div className="hover:bg-[#1F2937] transition-all rounded-md flex justify-start py-2">
                                    <span className="px-2 font-satoshi text-sm flex gap-2 items-center">
                                        <ChatBubble /> Questions
                                    </span>
                                </div>
                                <div className="hover:bg-[#1F2937] transition-all rounded-md flex justify-start py-2">
                                    <span className="px-2 font-satoshi text-sm flex gap-2 items-center">
                                        <Payout /> Payout Methods
                                    </span>
                                </div>
                                <div className="hover:bg-[#1F2937] transition-all rounded-md flex justify-start py-2">
                                    <span className="px-2 font-satoshi text-sm flex gap-2 items-center">
                                        <Bounty /> Bounty
                                    </span>
                                </div>
                                <div className="hover:bg-[#1F2937] transition-all rounded-md flex justify-start py-2">
                                    <span className="px-2 font-satoshi text-sm flex gap-2 items-center">
                                        <Calendar /> Calendar
                                    </span>
                                </div>
                            </div>
                            <div className="border-t border-[#1F2937] w-full"></div>
                            <div className="mb-1 mt-1 w-[95%]">
                                <div className="hover:bg-[#1F2937] transition-all rounded-md flex justify-between py-2">
                                    <div>
                                        <span className="px-2 font-satoshi text-sm flex gap-2 items-center">
                                            <GithubToggle /> Assignments
                                        </span>
                                    </div>
                                    <div className="items-center flex mr-1">
                                        <Next />
                                    </div>
                                </div>  
                                <Link to={"https://projects.100xdevs.com/"} target="_blank">
                                    <div className="hover:bg-[#1F2937] transition-all rounded-md flex justify-between py-2">
                                        <div>
                                            <span className="px-2 font-satoshi text-sm flex gap-2 items-center">
                                                <Notion /> Slides 
                                            </span>
                                        </div>
                                        <div className="items-center flex mr-1">
                                            <NewPage />
                                        </div>
                                    </div>  
                                </Link>
                            </div>
                            <div className="border-t border-[#1F2937] w-full"></div>
                            <div className="w-[95%] flex flex-col mt-1 mb-1">
                                <div className="hover:bg-[#1F2937] transition-all rounded-md flex justify-start py-2" onClick={logout}>
                                    <span className="px-2 font-satoshi text-sm flex gap-2 items-center hover:text-red-500 transition-all duration-300">
                                        <Logout />Logout
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>}
                </div> : <div className="flex gap-2"><Button onClick={signupNavigate} text="Login" variant="secondary"/>
                <Link to={"https://harkirat.classx.co.in/new-courses"} target="_blank">
                    <Button text="Join now" variant="primary"/>
                </Link></div>}
            </div>
        </div>
    </div>
}