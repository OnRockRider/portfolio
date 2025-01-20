import { assets } from "@/assets/assets"
import Image from "next/image"
import React from "react"



const Footer = ({IsDarkMode}) => {
    return(
        <div className="mt-20">
            <div className="text-center">
                <Image src={IsDarkMode ? assets.logo_dark : assets.logo} alt="" className="w-36 mx-auto mb-2"/>

                <div className="w-max flex item-center gap-2 mx-auto">
                <Image src={IsDarkMode ?assets.mail_icon_dark : assets.mail_icon} alt="" className="w-6"/>
                mistrineel9@gmail.com
                </div>
            </div>

            <div className="text-center sm:flex item-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6">
                <p>© 2025 Neel Suthar.All rights reseverd </p>
                <ul className="flex item-center gap-10 justify-center mt-4 sm:mt-0 ">
                    <li><a target="_blank" href="https://github.com/surekha-del">Github</a></li>
                    <li><a target="_blank" href="https://github.com/surekha-del">Linkdid</a></li>
                    <li><a target="_blank" href="https://github.com/surekha-del">Instagarm</a></li>


                </ul>
            </div>
        </div>
    )
} 

export default Footer