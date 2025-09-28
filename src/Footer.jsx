import fur1 from "./assets/f1.png"
import fur2 from "./assets/f2.png"
import fur3 from "./assets/f3.png"
import fur4 from "./assets/f4.png"
// import fur5 from "./assets/f5.png"
// import fur6 from "./assets/f6.png"
import { NavLink } from 'react-router-dom'

import {
    FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaFacebookF,
    FaLinkedinIn,
    FaInstagram,
} from 'react-icons/fa';
import Button from './Button';


function Footer() {
    return (
        <div className='footer text-amber-50 border-t-1 pt-9'>
            <div className="f__contact">
                <div className='f__icon'>
                    <FaPhoneAlt size={30} color="white" aria-label="Call icon" style={{ marginLeft: '20px' }} />
                    <p>Call : 01006372080</p>
                </div>
                <div className='f__icon'>
                    <FaEnvelope size={30} color="white" aria-label="Email icon" style={{ marginLeft: '20px' }} />
                    <p>Email : alaaibrahmi@gmail</p>
                </div>
                <div className='f__icon'>
                    <FaMapMarkerAlt size={30} color="white" aria-label="Email icon" style={{ marginLeft: '20px' }} />
                    <p>Location </p>
                </div>
            </div>
            <div className='f-second'>
                <div>
                    <h3>Quick Links</h3>
                    <div className="footer__links">
                        <div className="f__links" >
                            <NavLink to={"/home"} >Home</NavLink>
                            <a href="#"> Furniture</a>
                            <a href="#"> Contact Us</a>
                        </div>
                        <div className="f__links" >
                            <a href="#"> About</a>
                            <a href="#"> Blog</a>
                        </div>
                    </div>
                </div>
                <div>
                    <h3>Instagram Feeds</h3>
                    <div className="f__imgs">
                        <img src={fur1} alt="" />
                        <img src={fur2} alt="" />
                        <img src={fur3} alt="" />
                        <img src={fur4} alt="" />
                        <img src={fur1} alt="" />
                        <img src={fur2} alt="" />
                    </div>
                </div>
                <div className=" flex flex-col gap-2">
                    <h3> Sign Up To our Newsletter</h3>
                    <input className="bg-amber-50 text-gray-950 p-1" type="email" placeholder='Enter Your Email' />
                    <Button bName={"Subsceibe"} />
                    <div className="flex justify-center">
                        <FaLinkedinIn className=" mx-1 hover:text-green-500 " size={25}  aria-label="Call icon"  />
                        <FaFacebookF className=" mx-1 hover:text-green-500 " size={25}  />
                        <FaInstagram className=" mx-1 hover:text-green-500 "  size={25}  />

                    </div>
                </div>
            </div>
        </div >
    )
}

export default Footer