import { GrClose } from "react-icons/gr";
import { MdOutlineMailOutline } from "react-icons/md";
import { BiLogoWhatsapp } from 'react-icons/bi';
import { AiOutlineMenu } from "react-icons/ai";
import { logoAlda } from "../../public"
import { useState } from "react";
import { useMediaQuery } from '@react-hook/media-query';
import { Link } from "react-router-dom";
import 'animate.css';


export const Navbar = () => {

  const isLargeScreen = useMediaQuery('(min-width: 1024px)');

  const isShortScreen = useMediaQuery('(min-width: 700px)');

  const [showMenu, setShowMenu] = useState(false);

  return (
      <header className=" lg:h-36 h-28 w-full flex justify-around fixed top-0 bg-white shadow-md z-20">
        <nav className={`hidden lg:flex order ${showMenu ? 'hidden' : 'flex'} ${isLargeScreen ? 'w-1/3' : ''} bg-gradient-to-r from-pink-200 to-white flex items-center justify-center`}>
            <Link to={'/'} className="hover:font-bold hover:text-gray-700 m-2 hover:cursor-pointer">Inicio</Link>
            <Link to={'/recetas'} className="hover:font-bold hover:text-gray-700 m-2 hover:cursor-pointer">Productos</Link>
            <a src="#" className="hover:font-bold hover:text-gray-700 m-2 hover:cursor-pointer">Sobre Mi</a>
            <Link to={'/contacto'} className="hover:font-bold hover:text-gray-700 m-2 hover:cursor-pointer">Contáctame</Link>
        </nav>

        <div className={`flex justify-center bg-gradient-to-r from-pink-200 to-white ${isLargeScreen ? '' : 'w-1/3'}`}>
          <button
            onClick={() => setShowMenu(!showMenu)}
            className="order lg:hidden"
          >          
            {showMenu ? <GrClose size={25}/> : <AiOutlineMenu size={25}/>}
          </button>

          {showMenu && (
              <div 
              className="
              lg:hidden fixed top-0 left-0 h-80 w-1/2 bg-gradient-to-r from-pink-200 to-gray-300 z-30 rounded-md shadow-xl
              ">
                <div className="lg:hidden flex flex-col text-center">
                  <button
                    onClick={() => setShowMenu(!showMenu)}
                    className="mt-4 ml-4 self-start animate__animated animate__flipInY"
                  >
                    <GrClose size={20} />
                  </button>
                  <Link onClick={() => setShowMenu(!showMenu)} to={'/home'} className="m-6 lg:text-md text-sm hover:underline leading-none hover:cursor-pointer animate__animated animate__fadeInLeft">
                    Inicio
                  </Link>
                  <Link onClick={() => setShowMenu(!showMenu)} to={'/recetas'} className="m-6 lg:text-md text-sm hover:underline leading-none hover:cursor-pointer animate__animated animate__fadeInLeft">
                    Productos
                  </Link>

                  <a href="#" className="m-6 lg:text-md text-sm hover:underline leading-none hover:cursor-pointer animate__animated animate__fadeInLeft">
                    Sobre Mi
                  </a>
                  <Link onClick={() => setShowMenu(!showMenu)} to={'/contacto'} className="m-6 lg:text-md text-sm hover:underline leading-none hover:cursor-pointer animate__animated animate__fadeInLeft">
                    Contáctame
                  </Link>
                </div>
              </div>
            )}
        </div>





        <div className="order-2 w-1/3 flex justify-center items-center">
            <img src={ logoAlda } className="queryImage" alt="logo" />
        </div>
        <div className="order-3 w-1/3 flex items-center justify-center bg-gradient-to-r from-white to-pink-200">
            <a href="mailto:info@aldasreposteria.com"><MdOutlineMailOutline className="mr-3 transition-transform duration-200 hover:scale-125" size={isShortScreen ? 30 : 23}/></a>
            <a href="https://wa.me/+56962936002" target="_blank" rel="noopener noreferrer" className="transition-transform duration-200 hover:scale-125">
                    <BiLogoWhatsapp size={isShortScreen ? 30 : 23}/>
            </a>
        </div>
      </header>
  )
}




