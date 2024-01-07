import logo from "../../assets/logo.png"
import { FaFacebook, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-blue-950 text-neutral-content">
                <div>
                    <img src={logo} className="w-14 h-14 my-1 rounded-full" alt="" />
                    <p>Morning Sun Sports Academies<br />Providing good teaching service since 2010</p>
                </div>
                <div>
                    <span className="text-gray-50 text-lg font-bold">Address</span>
                    <div>
                        <p>House No-20, Road-10, Bank Colony<br></br> Savar, Dhaka</p>
                    </div>
                </div>
                <div>
                    <span className="text-gray-50 text-lg font-bold">Contact Us</span>
                        <p className="flex items-center gap-2 pb-2"><span><FaPhoneAlt></FaPhoneAlt></span> 01834290402</p>
                        <p className="flex items-center gap-2 pb-2"><span><FaPhoneAlt></FaPhoneAlt></span> 01934290402</p>
                        <p className="text-lg font-bold">Also connect us by</p>
                        <div className="flex gap-2">
                        <a href="#"><span className="text-2xl"><FaFacebook></FaFacebook></span></a>
                        <a href="#"><span className="text-2xl"><FaWhatsapp></FaWhatsapp></span></a>
                        </div>
                </div>
                </footer>
                <div className="text-center bg-blue-950 text-white pb-5">
                    <p>Copyright © 2023 - All right reserved by Morning Sun Sports Academies</p>
                </div>
        </div>
    );
};

export default Footer;