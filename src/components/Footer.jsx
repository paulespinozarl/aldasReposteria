import { CiFacebook, CiTwitter } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { PiYoutubeLogoLight } from "react-icons/pi";

export const Footer = () => {
  return (
    <>
        <footer className="h-48 bg-gray-400 flex items-center justify-around">
            <button><CiFacebook className="text-pink-200" size={30}/></button>
            <button><CiTwitter className="text-pink-200" size={30}/></button>
            <button><FaInstagram className="text-pink-200" size={30}/></button>
            <button><PiYoutubeLogoLight className="text-pink-200" size={30}/></button>
        </footer>
    </> 
    )
}
