import { NavLink, useLocation } from 'react-router-dom'
import { FaUser, FaSearch, FaShoppingCart, FaUtensils, FaBars, FaTimes } from 'react-icons/fa';
import { useSelector } from "react-redux";
import { useState } from 'react';
import "./main.css"

function Nav() {
    let count = useSelector((state) => state.counter.value)
    const location = useLocation();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const isActive = (path) => location.pathname === path;

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    return (
        <div>
            <nav className='flex justify-between items-center font-bold text-amber-50 py-4 px-8 bg-gradient-to-r from-green-900 via-green-800 to-green-900 fixed top-0 left-0 right-0 z-50 shadow-lg border-b border-green-700'>
                
                {/* Logo */}
                <div className='flex items-center gap-2 text-2xl font-bold'>
                    <FaUtensils size={28} className='text-amber-400' />
                    <span className='hidden sm:inline'>FoodHub</span>
                </div>

                {/* Desktop Navigation Links */}
                <ul className='hidden md:flex gap-8'>
                    <li>
                        <NavLink 
                            to={"/home"}
                            className={`transition-all duration-300 pb-2 border-b-2 ${isActive("/home") ? 'border-amber-400 text-amber-400' : 'border-transparent hover:border-amber-400 hover:text-amber-300'}`}
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to={"/products"}
                            className={`transition-all duration-300 pb-2 border-b-2 ${isActive("/products") ? 'border-amber-400 text-amber-400' : 'border-transparent hover:border-amber-400 hover:text-amber-300'}`}
                        >
                            Menu
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to={"/cards"}
                            className={`transition-all duration-300 pb-2 border-b-2 ${isActive("/cards") ? 'border-amber-400 text-amber-400' : 'border-transparent hover:border-amber-400 hover:text-amber-300'}`}
                        >
                            Popular
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to={"/blogs"}
                            className={`transition-all duration-300 pb-2 border-b-2 ${isActive("/blogs") ? 'border-amber-400 text-amber-400' : 'border-transparent hover:border-amber-400 hover:text-amber-300'}`}
                        >
                            Blogs
                        </NavLink>
                    </li>
                </ul>

                {/* Desktop Icons & Actions */}
                <div className='hidden md:flex gap-6 items-center'>
                    <NavLink  to={"/"} className='transition-all duration-300 hover:text-amber-400 hover:scale-110'>
                        LOGIN
                    </NavLink>
                    
                    <div className='relative inline-block group'>
                        <NavLink to="/cart" className="relative inline-block cursor-pointer transition-all duration-300 hover:scale-110">
                            <FaShoppingCart size={18} className='group-hover:text-amber-400' />
                            <span className="absolute -top-3 -right-3 bg-red-500 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center animate-pulse">
                                {count}
                            </span>
                        </NavLink>
                    </div>

                    <FaUser size={18} className='cursor-pointer transition-all duration-300 hover:text-amber-400 hover:scale-110' />
                    <FaSearch size={18} className='cursor-pointer transition-all duration-300 hover:text-amber-400 hover:scale-110' />
                </div>

                {/* Mobile Menu Button */}
                <button 
                    className='md:hidden text-amber-50 transition-all duration-300 hover:text-amber-400'
                    onClick={toggleMobileMenu}
                >
                    {mobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                </button>
            </nav>

            {/* Mobile Toast Menu */}
            {mobileMenuOpen && (
                <div className='md:hidden fixed top-16 left-0 right-0 bg-gradient-to-b from-green-900 to-green-800 border-b-2 border-green-700 shadow-2xl z-40 animate-slideDown'>
                    {/* Mobile Navigation Links */}
                    <ul className='flex flex-col py-4'>
                        <li>
                            <NavLink 
                                to={"/home"}
                                onClick={() => setMobileMenuOpen(false)}
                                className={`block px-6 py-3 transition-all duration-300 border-l-4 ${isActive("/home") ? 'border-amber-400 text-amber-400 bg-gray-800' : 'border-transparent text-amber-50 hover:border-amber-400 hover:bg-gray-800'}`}
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                                to={"/products"}
                                onClick={() => setMobileMenuOpen(false)}
                                className={`block px-6 py-3 transition-all duration-300 border-l-4 ${isActive("/products") ? 'border-amber-400 text-amber-400 bg-gray-800' : 'border-transparent text-amber-50 hover:border-amber-400 hover:bg-gray-800'}`}
                            >
                                Menu
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                                to={"/cards"}
                                onClick={() => setMobileMenuOpen(false)}
                                className={`block px-6 py-3 transition-all duration-300 border-l-4 ${isActive("/cards") ? 'border-amber-400 text-amber-400 bg-gray-800' : 'border-transparent text-amber-50 hover:border-amber-400 hover:bg-gray-800'}`}
                            >
                                Popular
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                                to={"/blogs"}
                                onClick={() => setMobileMenuOpen(false)}
                                className={`block px-6 py-3 transition-all duration-300 border-l-4 ${isActive("/blogs") ? 'border-amber-400 text-amber-400 bg-gray-800' : 'border-transparent text-amber-50 hover:border-amber-400 hover:bg-gray-800'}`}
                            >
                                Blogs
                            </NavLink>
                        </li>
                    </ul>

                    {/* Divider */}
                    <div className='h-px bg-green-700'></div>

                    {/* Mobile Icons & Actions */}
                    <div className='flex flex-col py-4 gap-1'>
                        <NavLink  
                            to={"/"} 
                            onClick={() => setMobileMenuOpen(false)}
                            className='px-6 py-3 text-amber-50 hover:text-amber-400 hover:bg-gray-800 transition-all duration-300'
                        >
                            LOGIN
                        </NavLink>
                        
                        <NavLink 
                            to="/cart"
                            onClick={() => setMobileMenuOpen(false)}
                            className='relative px-6 py-3 text-amber-50 hover:text-amber-400 hover:bg-gray-800 transition-all duration-300 flex items-center gap-2'
                        >
                            <FaShoppingCart size={18} />
                            Cart
                            <span className="ml-auto bg-red-500 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center animate-pulse">
                                {count}
                            </span>
                        </NavLink>

                        <button className='px-6 py-3 text-amber-50 hover:text-amber-400 hover:bg-gray-800 transition-all duration-300 flex items-center gap-2 text-left'>
                            <FaUser size={18} />
                            Profile
                        </button>

                        <button className='px-6 py-3 text-amber-50 hover:text-amber-400 hover:bg-gray-800 transition-all duration-300 flex items-center gap-2 text-left'>
                            <FaSearch size={18} />
                            Search
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Nav