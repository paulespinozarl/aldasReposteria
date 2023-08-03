import { CiFacebook, CiTwitter } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { PiYoutubeLogoLight } from "react-icons/pi";

export const Footer = () => {
  return (
    <>
        <footer className="h-32 lg:h-48 bg-gray-400 flex items-center justify-around">
            <a href="#"><CiFacebook className="text-pink-200 transition-transform duration-200 hover:scale-125" size={30}/></a>
            <a href="#"><CiTwitter className="text-pink-200 transition-transform duration-200 hover:scale-125" size={35}/></a>
            <a href="https://www.instagram.com/aldasreposteria/" target="_blank"><FaInstagram className="text-pink-200 transition-transform duration-200 hover:scale-125" size={30}/></a>
            <a href="#"><PiYoutubeLogoLight className="text-pink-200 transition-transform duration-200 hover:scale-125" size={35}/></a>
        </footer>
    </> 
    )
}
