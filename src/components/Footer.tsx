import { Github } from "../icons/Github"
import { Instagram } from "../icons/Instagram"
import { Twitter } from "../icons/X"
import { Youtube } from "../icons/Youtube"

export const Footer = () => {
    return <div className="flex border-t border-[#222327] pt-10 mb-10 w-[90%] m-auto gap-72">
        <div className="flex flex-col">
            <div className="flex">
                <img className="rounded-full" src="https://appx-wsb-gcp.akamai.net.in/subject/2023-01-17-0.17044360120951185.jpg" alt="web" width={70}/>
                <div className="ml-2 flex">
                    <div>
                        <h1 className="cursor-pointer font-satoshi font-extrabold content-center text-transparent bg-clip-text  bg-gradient-to-t from-[#2456dc] to-[#5091f2] text-3xl">100xDevs</h1>
                        <h1 className="text-white font-satoshi text-md font-light">
                            because 10x aint't enough.
                        </h1>
                    </div>
                </div>
            </div>
            <div className="mt-10 flex flex-col">
                <div>
                    <h1 className="text-white font-satoshi text-sm font-light">
                    Follow us
                    </h1>
                </div>
                <div className="flex gap-4 mt-3">
                    <div className="bg-[#11182A] p-1 cursor-pointer rounded-md w-7">
                        <a href="https://x.com/ishyverma" target="_blank">
                            <Twitter />
                        </a>
                    </div>
                    <div className="bg-[#11182A] p-1 cursor-pointer rounded-md w-7">
                        <a href="https://www.instagram.com/shyshy17.0/" target="_blank">
                            <Instagram />
                        </a>
                    </div>
                    <div className="bg-[#11182A] p-1 cursor-pointer rounded-md w-8">
                        <a href="https://github.com/ishyverma" target="_blank">
                            <Youtube />
                        </a>
                    </div>
                    <div className="bg-[#11182A] p-1 cursor-pointer rounded-md w-8">
                        <a href="https://github.com/ishyverma" target="_blank">
                            <Github />
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div className="flex flex-col gap-4 mx-auto">
            <h1 className="text-white font-satoshi text-md font-light">
                100x Links
            </h1>
            <h1 className="text-white transition-all cursor-pointer hover:text-[#2463EB] font-satoshi text-sm font-light">
                Projects
            </h1>
            <h1 className="text-white transition-all cursor-pointer hover:text-[#2463EB] font-satoshi text-sm font-light">
                Report
            </h1>
        </div>
        <div className="flex flex-col gap-4 ml-auto">
            <h1 className="text-white font-satoshi text-md font-light">
                100x Legal
            </h1>
            <h1 className="text-white transition-all cursor-pointer hover:text-[#2463EB] font-satoshi text-sm font-light">
                Terms & Conditions
            </h1>
            <h1 className="text-white transition-all cursor-pointer hover:text-[#2463EB] font-satoshi text-sm font-light">
                Privacy Policy
            </h1>
            <h1 className="text-white transition-all cursor-pointer hover:text-[#2463EB] font-satoshi text-sm font-light">
                Refund & Cancellation
            </h1>
        </div>
    </div>
}