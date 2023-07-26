import { CiFacebook, CiTwitter } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { PiYoutubeLogoLight } from "react-icons/pi";

export const Footer = () => {
  return (
    <>
        <footer className="h-60 bg-gray-400 flex items-center justify-around">
            <CiFacebook className="text-pink-200" size={30}/>
            <CiTwitter className="text-pink-200" size={30}/>
            <FaInstagram className="text-pink-200" size={30}/>
            <PiYoutubeLogoLight className="text-pink-200" size={30}/>
        </footer>
    </> 
    )
}
