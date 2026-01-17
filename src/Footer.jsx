import fur1 from "./assets/f1.png"
import fur2 from "./assets/f2.png"
import fur3 from "./assets/f3.png"
import fur4 from "./assets/f4.png"
import { NavLink } from 'react-router-dom'
import {
    FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaFacebookF,
    FaLinkedinIn, FaGithub, FaHome, FaWhatsapp, FaList, FaNewspaper, FaInfoCircle
} from 'react-icons/fa';

function Footer() {
    return (
        <div className='footer bg-gray-900 border-t-2 border-green-700 pt-16 pb-8'>

            {/* Top Section - Contact Info */}
            <div className="f__contact grid grid-cols-1 md:grid-cols-3 gap-8 px-8 md:px-16 mb-12">
                <div className='f__icon flex items-start gap-4 group'>
                    <div className='p-3 bg-green-700 rounded-lg group-hover:bg-amber-400 transition-colors duration-300'>
                        <FaPhoneAlt size={24} className='text-amber-50 group-hover:text-gray-950 transition-colors duration-300' />
                    </div>
                    <div>
                        <h4 className='text-amber-50 font-bold mb-1'>Call Us</h4>
                        <p className='text-gray-400 group-hover:text-amber-400 transition-colors duration-300'>01006372080</p>
                    </div>
                </div>

                <div className='f__icon flex items-start gap-4 group'>
                    <div className='p-3 bg-green-700 rounded-lg group-hover:bg-amber-400 transition-colors duration-300'>
                        <FaEnvelope size={24} className='text-amber-50 group-hover:text-gray-950 transition-colors duration-300' />
                    </div>
                    <div>
                        <h4 className='text-amber-50 font-bold mb-1'>Email</h4>
                        <p className='text-gray-400 group-hover:text-amber-400 transition-colors duration-300'>alaaibrahmi@gmail.com</p>
                    </div>
                </div>

                <div className='f__icon flex items-start gap-4 group'>
                    <div className='p-3 bg-green-700 rounded-lg group-hover:bg-amber-400 transition-colors duration-300'>
                        <FaMapMarkerAlt size={24} className='text-amber-50 group-hover:text-gray-950 transition-colors duration-300' />
                    </div>
                    <div>
                        <h4 className='text-amber-50 font-bold mb-1'>Location</h4>
                        <p className='text-gray-400 group-hover:text-amber-400 transition-colors duration-300'>Cairo, Egypt</p>
                    </div>
                </div>
            </div>

            <div className='h-px bg-gradient-to-r from-transparent via-green-700 to-transparent mx-8 md:mx-16 mb-12'></div>

            {/* Middle Section - Links, Images, Newsletter */}
            <div className='f-second grid grid-cols-1 md:grid-cols-3 gap-12 px-8 md:px-16 mb-12'>

                {/* Quick Links */}
                <div>
                    <h3 className='text-amber-50 text-xl font-bold mb-6 flex items-center gap-2'>
                        <span className='h-1 w-6 bg-amber-400 rounded'></span>
                        Quick Links
                    </h3>
                    <div className="footer__links flex flex-col gap-6">
                        <div className="f__links flex flex-col gap-3">
                            <NavLink to={"/home"} className='text-gray-400 hover:text-amber-400 transition-colors duration-300 font-medium flex items-center gap-2'>
                                <FaHome size={16} /> Home
                            </NavLink>
                            <NavLink to={"/products"} className='text-gray-400 hover:text-amber-400 transition-colors duration-300 font-medium flex items-center gap-2'>
                                <FaList size={16} /> Menu
                            </NavLink>
                            <NavLink to={"/cards"} className='text-gray-400 hover:text-amber-400 transition-colors duration-300 font-medium flex items-center gap-2'>
                                <FaList size={16} /> Popular
                            </NavLink>
                        </div>
                        <div className="f__links flex flex-col gap-3">
                            <NavLink to={"/about"} className='text-gray-400 hover:text-amber-400 transition-colors duration-300 font-medium flex items-center gap-2'>
                                <FaInfoCircle size={16} /> About Us
                            </NavLink>
                            <NavLink to={"/blogs"} className='text-gray-400 hover:text-amber-400 transition-colors duration-300 font-medium flex items-center gap-2'>
                                <FaNewspaper size={16} /> Blog
                            </NavLink>
                        </div>
                    </div>
                </div>

                {/* Instagram Feeds */}
                <div>
                    <h3 className='text-amber-50 text-xl font-bold mb-6 flex items-center gap-2'>
                        <span className='h-1 w-6 bg-amber-400 rounded'></span>
                        Gallery
                    </h3>
                    <div className="f__imgs grid grid-cols-3 gap-2">
                        <img src={fur1} alt="feed" className='w-full h-20 object-cover rounded-lg hover:scale-110 transition-transform duration-300 cursor-pointer' />
                        <img src={fur2} alt="feed" className='w-full h-20 object-cover rounded-lg hover:scale-110 transition-transform duration-300 cursor-pointer' />
                        <img src={fur3} alt="feed" className='w-full h-20 object-cover rounded-lg hover:scale-110 transition-transform duration-300 cursor-pointer' />
                        <img src={fur4} alt="feed" className='w-full h-20 object-cover rounded-lg hover:scale-110 transition-transform duration-300 cursor-pointer' />
                        <img src={fur1} alt="feed" className='w-full h-20 object-cover rounded-lg hover:scale-110 transition-transform duration-300 cursor-pointer' />
                        <img src={fur2} alt="feed" className='w-full h-20 object-cover rounded-lg hover:scale-110 transition-transform duration-300 cursor-pointer' />
                    </div>
                </div>

                {/* Newsletter */}
                <div className='flex flex-col gap-4'>
                    <h3 className='text-amber-50 text-xl font-bold flex items-center gap-2'>
                        <span className='h-1 w-6 bg-amber-400 rounded'></span>
                        Newsletter
                    </h3>
                    <p className='text-gray-400 text-sm'>Subscribe to get updates on new dishes and exclusive offers</p>
                    <input
                        className="bg-gray-800 text-gray-100 p-3 rounded-lg border border-green-700 focus:border-amber-400 focus:outline-none transition-colors duration-300 placeholder-gray-600"
                        type="email"
                        placeholder='Enter your email'
                    />
                    <button className='px-4 py-2 bg-gradient-to-r from-amber-400 to-amber-500 text-gray-950 font-bold rounded-lg hover:from-amber-500 hover:to-amber-600 transition-all duration-300 transform hover:scale-105'>
                        Subscribe
                    </button>

                    {/* Social Icons */}
                    <div className="flex gap-3 mt-4">
                        <a href="https://www.facebook.com/profile.php?id=100012606046722" target="_blank" rel="noopener noreferrer" className='p-3 bg-green-700 rounded-lg hover:bg-amber-400 text-amber-50 hover:text-gray-950 transition-all duration-300 transform hover:scale-110'>
                            <FaFacebookF size={18} />
                        </a>
                        <a href="https://github.com/AlaaIbra-Him" target="_blank" rel="noopener noreferrer" className='p-3 bg-green-700 rounded-lg hover:bg-amber-400 text-amber-50 hover:text-gray-950 transition-all duration-300 transform hover:scale-110'>
                            <FaGithub size={18} />
                        </a>
                        <a href="https://wa.me/201006372080" target="_blank" rel="noopener noreferrer" className='p-3 bg-green-700 rounded-lg hover:bg-amber-400 text-amber-50 hover:text-gray-950 transition-all duration-300 transform hover:scale-110'>
                            <FaWhatsapp size={18} />
                        </a>
                        <a href="https://www.linkedin.com/in/alaa-ibra-him/" target="_blank" rel="noopener noreferrer" className='p-3 bg-green-700 rounded-lg hover:bg-amber-400 text-amber-50 hover:text-gray-950 transition-all duration-300 transform hover:scale-110'>
                            <FaLinkedinIn size={18} />
                        </a>
                    </div>
                </div>
            </div>

            <div className='h-px bg-gradient-to-r from-transparent via-green-700 to-transparent mx-8 md:mx-16 mb-8'></div>

            {/* Bottom Section - Copyright */}
            <div className='text-center text-gray-400 text-sm px-8'>
                <p>© 2025 Alaa IbraHim. All rights reserved</p>
            </div>
        </div>
    )
}

export default Footer