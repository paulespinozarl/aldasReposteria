import { FaInstagram } from "react-icons/fa";
import { PiYoutubeLogoLight } from "react-icons/pi";
import { AiOutlineWhatsApp } from 'react-icons/ai';
import { useMediaQuery } from "@react-hook/media-query";

import { Link } from "react-router-dom";
import { MdOutlineMailOutline } from "react-icons/md";

export const Footer = () => {

  const isShortScreen = useMediaQuery('(min-width: 700px)');

  return (
    <>
        <footer className="h-28 lg:h-36 bg-gray-400 grid items-center justify-around">
            <div className="flex lg:flex-row justify-center text-gray-700 mt-2">
                <Link to={'/'} className="lg:text-sm mr-2 lg:mr-4 text-xs hover:underline leading-loose hover:cursor-pointer">
                  Inicio
                </Link>
                <Link to={'/recetas'} className="lg:text-sm mr-2 lg:mr-4 text-xs hover:underline leading-loose hover:cursor-pointer">
                  Productos
                </Link>
                <a href="#" className="lg:text-sm mr-2 lg:mr-4 text-xs hover:underline leading-loose hover:cursor-pointer">
                  Sobre Mi
                </a>
                <Link to={'/contacto'} className="lg:text-sm lg:mr-4 text-xs hover:underline leading-loose hover:cursor-pointer">
                  Contáctame
                </Link>
            </div>
            <div className="flex items-center justify-around text-gray-700">
                <a href="https://www.instagram.com/aldasreposteria/" target="_blank"><FaInstagram className="transition-transform duration-200 hover:scale-125" size={25}/></a>
                <a href="#"><PiYoutubeLogoLight className=" transition-transform duration-200 hover:scale-125" size={30}/></a>
            </div>
            <div className="grid items-center justify-center mb-1">
                <span className="text-ssm text-gray-800">Desarrollado por Paul Espinoza - © 2023</span>
                <div className="flex justify-center">
                  <a href="https://wa.me/+541130085208" target="_blank" rel="noopener noreferrer" className="transition-transform duration-200 hover:scale-125 flex justify-center mr-2">
                      <AiOutlineWhatsApp size={isShortScreen ? 12 : 10}/>
                  </a>
                  <a href="mailto:paulespinozarl@gmail.com" target="_blank" rel="noopener noreferrer" className="transition-transform duration-200 hover:scale-125 flex justify-center">
                    <MdOutlineMailOutline size={isShortScreen ? 12 : 10}/>
                  </a>
                </div>
            </div>
        </footer>
    </> 
    )
}
