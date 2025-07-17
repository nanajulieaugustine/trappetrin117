import { CiFacebook } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import Link from "next/link";

const Footer = () => {
    return ( <div className="bg-(--foreground) min-h-80 px-(--content-width) py-5">
        <div className="flex gap-5 justify-end p-2">
            <Link href="https://www.instagram.com/trappetrin117/" target="_blank" title="instagram">
                <CiInstagram size={30} className="text-(--background) hover:scale-105 transition-all duration-300" />
            </Link>
            <Link href="https://www.facebook.com/people/TrappeTrin117/61567011277715/?ref=_xav_ig_profile_page_web#" target="_blank" title="facebook">
            <CiFacebook size={30} className="text-(--background) hover:scale-105 transition-all duration-300" />
            </Link>
        </div>
        <h1 className="italic white">Trappetrin 117</h1>
        <div className="flex white gap-10 justify-between">
            <p className="thin white max-w-50">UNGEHUSET LUCERNA AHLGADE 3F 4300 HOLBÆK</p>
            <p className="thin no-break">TRAPPETRIN117@GMAIL.COM</p>
        </div>
        <p className="white flex justify-center thin">CVR: 45 32 31 61</p>
    </div> );
}
 
export default Footer;