import { Download } from "../icons/Download"
import { Star } from "../icons/Star"
import { Button } from "../ui/Button"

export const Hero = () => {
    return <div>
        <div className="flex flex-col justify-center items-center font-satoshi font-extrabold pt-36">
            <div className="text-[65px] tracking-tighter">
                <span className="text-transparent bg-clip-text bg-gradient-to-t from-[#2456dc] to-[#5091f2]">100xDevs,</span>
                <span className="text-[#BDC0C2]"> because</span>
            </div>
            <div className="text-[65px] tracking-tighter leading-[35px]">
                <span className="text-[#BDC0C2]">10x ain't enough!</span>
            </div>
            <div className="mt-6">
                <span className="text-[#BDC0C2] font-satoshi font-medium">A beginner-friendly platform for mastering programming skills.</span>
            </div>
            <div className="mt-7 flex gap-3">
                <Button text="Explore Courses" variant="primary"/>
                <Button text="Explore Notes" variant="secondary"/>
            </div>
        </div>
        <div className="flex mt-14 gap-4 pt-4 w-[90%] m-auto overflow-x-auto">
            <img src="https://appxcontent.kaxa.in/paid_course3/2024-07-09-0.27031454992467685.png" width={340} className="rounded-2xl hover:-translate-y-3 transition-all cursor-pointer border border-[#3A3B3F]" alt="" />
            <img src="https://100x-b-mcdn.akamai.net.in/images/adhoc.jpeg" width={340} className="rounded-2xl hover:-translate-y-3 transition-all cursor-pointer border border-[#3A3B3F]" alt="" />
            <img src="https://100x-b-mcdn.akamai.net.in/images/ds.jpeg" width={340} className="rounded-2xl hover:-translate-y-3 transition-all cursor-pointer border border-[#3A3B3F]" alt="" />
            <img src="https://appxcontent.kaxa.in/paid_course3/2024-07-09-0.6125162399767927.png" width={340} className="rounded-2xl hover:-translate-y-3 transition-all border cursor-pointer border-[#3A3B3F]" alt="" />
        </div>
        <div className="flex justify-between w-[90%] h-72 m-auto mt-10 bg-gradient-to-t mb-10 overflow-hidden from-[#2456dc] to-[#5091f2] rounded-2xl">
            <div className="pt-6 pl-5 pb-24 w-[60%] flex">
                <div className="flex flex-col">
                    <span className="font-satoshi tracking-tighter text-white text-3xl font-bold">Every developer deserves to be a great engineer, a 100xEngineer!</span>
                    <span className="text-white font-satoshi font-normal mt-2 text-lg">Give yourself the power you deserve with a 100xdevs today!</span>
                    <div className="flex gap-2 mt-4">
                        <button className="flex gap-1 content-center bg-white hover:bg-[#E1E2E4] font-satoshi text-xs py-3 px-6 rounded transition-all">
                            <div className="flex self-center">
                                <Download />
                            </div>
                            <div>
                                Download App
                            </div>
                        </button>
                        <button className="flex gap-1 content-center bg-[#1F2937] hover:bg-[#25385A] font-satoshi text-xs py-3 px-7 rounded transition-all text-white">
                            <div className="flex self-center">
                                <Star />
                            </div>
                            <div>
                                Join Now
                            </div>
                        </button>
                    </div>
                </div>
            </div>
            <div>
                <img width={350} className="rotate-3 pt-10 hover:-translate-y-3 transition-all hover:rotate-6 pr-10 cursor-pointer" src="https://app.100xdevs.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FMockup.01b5ae40.png&w=1920&q=75" alt="phone-web" />
            </div>
        </div>
    </div>
}