import { FiUser } from "react-icons/fi";
import { GrClose } from "react-icons/gr";
import { MdOutlineMailOutline } from "react-icons/md";
import { AiOutlineWhatsApp } from 'react-icons/ai';
import { AiOutlineMenu } from "react-icons/ai";
import { logoAlda } from "../../public"
import { useState } from "react";
import { useMediaQuery } from '@react-hook/media-query';


export const Navbar = () => {

  const isLargeScreen = useMediaQuery('(min-width: 1024px)');

  const isShortScreen = useMediaQuery('(min-width: 700px)');

  const [showMenu, setShowMenu] = useState(false);

  return (
      <header className=" lg:h-36 h-28 w-full flex justify-around fixed top-0 bg-white shadow-md z-10">
        <nav className={`hidden lg:flex order ${showMenu ? 'hidden' : 'flex'} ${isLargeScreen ? 'w-1/3' : ''} bg-gradient-to-r from-pink-200 to-white flex items-center justify-center`}>
            <a src="#" className="m-2 hover:underline hover:cursor-pointer">Inicio</a>
            <a src="#" className="m-2 hover:underline hover:cursor-pointer">Productos</a>
            <a src="#" className="m-2 hover:underline hover:cursor-pointer">Sobre Mi</a>
            <a src="#" className="m-2 hover:underline hover:cursor-pointer">Contáctame</a>
        </nav>

        <div className={`flex justify-center bg-gradient-to-r from-pink-200 to-white ${isLargeScreen ? '' : 'w-1/3'}`}>
          <button
                onClick={() => setShowMenu(!showMenu)}
                className="focus:outline-none order lg:hidden transition-transform duration-200 hover:scale-125"
              >
                {showMenu ? <GrClose size={25}/> : <AiOutlineMenu size={25}/>}
              </button>

          {showMenu && (
              <div className="lg:hidden flex flex-col items-center lg:h-36 h-28 text-center">
                <a href="#" className="m-2 lg:text-sm text-xs hover:underline leading-none hover:cursor-pointer">
                  Inicio
                </a>
                <a href="#" className="m-2 lg:text-sm text-xs hover:underline leading-none hover:cursor-pointer">
                  Productos
                </a>
                <a href="#" className="m-2 lg:text-sm text-xs hover:underline leading-none hover:cursor-pointer">
                  Sobre Mi
                </a>
                <a href="#" className="m-2 lg:text-sm text-xs hover:underline leading-none hover:cursor-pointer">
                  Contáctame
                </a>
              </div>
            )}
        </div>





        <div className="order-2 w-1/3 flex justify-center items-center">
            <img src={ logoAlda } className="queryImage" alt="logo" />
        </div>
        <div className="order-3 w-1/3 flex items-center justify-center bg-gradient-to-r from-white to-pink-200">
            <a><FiUser className="mr-3 transition-transform duration-200 hover:scale-125" size={isShortScreen ? 30 : 23}/></a>
            <a><MdOutlineMailOutline className="mr-3 transition-transform duration-200 hover:scale-125" size={isShortScreen ? 30 : 23}/></a>
            <a href="https://wa.me/+56962936002" target="_blank" rel="noopener noreferrer" className="transition-transform duration-200 hover:scale-125">
                    <AiOutlineWhatsApp size={isShortScreen ? 30 : 23}/>
            </a>
        </div>
      </header>
  )
}




