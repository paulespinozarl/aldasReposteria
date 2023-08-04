import { CiFacebook, CiTwitter } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { PiYoutubeLogoLight } from "react-icons/pi";

export const Footer = () => {
  return (
    <>
        <footer className="h-32 lg:h-48 bg-gray-400 grid grid-cols-2 grid-rows-4 items-center justify-around">
            <div className="flex flex-col ml-7 lg:ml-0 lg:flex-row justify-center row-start-1 row-end-6 text-gray-700">
                <a href="#" className="lg:text-sm text-xs hover:underline leading-loose hover:cursor-pointer">
                  Inicio
                </a>
                <a href="#" className="lg:text-sm text-xs hover:underline leading-loose hover:cursor-pointer">
                  Productos
                </a>
                <a href="#" className="lg:text-sm text-xs hover:underline leading-loose hover:cursor-pointer">
                  Sobre Mi
                </a>
                <a href="#" className="lg:text-sm text-xs hover:underline leading-loose hover:cursor-pointer">
                  Contáctame
                </a>
            </div>
            <div className="flex items-center justify-around row-start-1 row-end-6 text-gray-700">
                <a href="https://www.instagram.com/aldasreposteria/" target="_blank"><FaInstagram className="transition-transform duration-200 hover:scale-125" size={30}/></a>
                <a href="#"><PiYoutubeLogoLight className=" transition-transform duration-200 hover:scale-125" size={35}/></a>
            </div>
            <div className="grid col-start-1 col-end-4 items-center justify-center mb-2">
                <p className="text-xs text-gray-800">Desarrollado por paulespinozarl@gmail.com - © 2023</p>
            </div>
        </footer>
    </> 
    )
}
