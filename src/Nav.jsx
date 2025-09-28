import { NavLink } from 'react-router-dom'
import { FaUser, FaSearch, FaShoppingCart } from 'react-icons/fa';
import { useSelector } from "react-redux";
import "./main.css"

function Nav() {

    let count = useSelector((state) => state.counter.value)
    return (
        <div>
            <nav className='flex justify-around font-bold  text-amber-50 py-5 bg-green-900 fixed top-0 left-0 right-0 w-ful ' >
                <ul className='flex gap-3'>
                    <li> <NavLink to={"/home"} >Home</NavLink> </li>
                    <li> <NavLink to={"/products"} >Menu</NavLink> </li>
                    <li> <NavLink to={"/cards"} >Populer</NavLink> </li>
                    <li> <NavLink to={"/blogs"} >Blogs</NavLink> </li>
                    {/* <li> {count} </li> */}
                </ul>
                <div className='flex gap-3 font-bold'>
                    <NavLink  to={"/"} >LOGIN</NavLink>
                    <div className='relative inline-block"'>
                        <NavLink to="/cart" className="relative inline-block cursor-pointer">
                        <FaShoppingCart size={15} className='mt-1 ' />
                        <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
                            {count}</span>
                             </NavLink>
                    </div>

                    <FaUser size={15} className='mt-1' />
                    <FaSearch size={15} className='mt-1' />

                </div>
            </nav>

        </div>
    )
}

export default Nav