import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { inc, dec } from "./counterModel";
import { addToCart, removeItem } from "./cartslice";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaPlus, FaMinus, FaCookieBite, FaClock } from 'react-icons/fa';

function Products() {
    const dispatch = useDispatch();
    const [myData, setmyData] = useState([]);
    const [loading, setLoading] = useState(true);
    const cart = useSelector(state => state.cart.items);

    async function handelData() {
        try {
            const res = await fetch("https://dummyjson.com/recipes");
            const mydata = await res.json();
            setmyData(mydata.recipes);
        } catch (error) {
            toast.error("Failed to load recipes");
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        handelData();
    }, []);

    if (loading) {
        return (
            <div className='flex justify-center items-center min-h-screen'>
                <div className='text-2xl text-amber-400 font-bold'>Loading delicious recipes...</div>
            </div>
        );
    }

    return (
        <div className='mt-24 mb-20 px-4 md:px-8'>
            {/* Header */}
            <div className='flex flex-col gap-4 items-center text-amber-50 mb-12'>
                <h1 className="text-5xl md:text-6xl font-bold text-center">
                    Our <span className='text-amber-400'>Menu</span>
                </h1>
                <p className='text-gray-400 max-w-2xl text-center text-lg'>
                    Explore our complete collection of carefully crafted recipes and dishes
                </p>
                <div className='h-1 w-24 bg-gradient-to-r from-green-500 to-amber-400 rounded-full'></div>
            </div>

            {/* Products Grid */}
            <div className="flex flex-wrap justify-center gap-6 max-w-7xl mx-auto">
                {myData.map(item => (
                    <div
                        key={item.id}
                        className="group bg-gray-800 rounded-xl overflow-hidden border-2 border-green-700 hover:border-amber-400 transition-all duration-300 hover:shadow-2xl hover:shadow-green-700/30 w-full sm:w-80 flex flex-col"
                    >
                        {/* Image Container */}
                        <div className='relative overflow-hidden bg-gray-900 h-56'>
                            <img
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                src={item.image}
                                alt={item.name}
                            />
                            <div className='absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-300'></div>
                        </div>

                        {/* Content */}
                        <div className='p-6 flex flex-col gap-4 flex-grow'>
                            <h2 className="text-2xl font-bold text-amber-50 group-hover:text-amber-400 transition-colors duration-300 line-clamp-2">
                                {item.name}
                            </h2>

                            {/* Details */}
                            <div className='grid grid-cols-2 gap-2 text-sm text-gray-400 mb-2'>
                                <div className='flex items-center gap-1'>
                                    <FaCookieBite size={14} className='text-amber-400' />
                                    <span>{item.cuisine}</span>
                                </div>
                                <div className='flex items-center gap-1'>
                                    <FaClock size={14} className='text-amber-400' />
                                    <span>{item.prepTimeMinutes}m</span>
                                </div>
                            </div>

                            {/* More Details Link */}
                            <NavLink
                                to={`/prodectsDetails/${item.id}`}
                                className="text-amber-400 hover:text-amber-300 font-bold text-sm transition-colors duration-300 mb-4"
                            >
                                → View Recipe
                            </NavLink>

                            {/* Action Buttons */}
                            <div className="flex gap-3 mt-auto">
                                <button
                                    className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
                                    onClick={() => {
                                        const itemExists = cart.some(cartItem => cartItem.id === item.id);
                                        if (!itemExists) {
                                            dispatch(inc());
                                        }
                                        dispatch(addToCart(item));
                                        toast.success("Added to cart! ", {
                                            position: "bottom-right",
                                            autoClose: 2000,
                                        });
                                    }}
                                >
                                    <FaPlus size={14} /> Add
                                </button>

                                <button
                                    className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
                                    onClick={() => {
                                        const isExist = cart.some(cartItem => cartItem.id === item.id);
                                        if (isExist) {

                                            const itemInCart = cart.find(cartItem => cartItem.id === item.id);
                                            // If it's the last quantity, decrement counter
                                            if (itemInCart && itemInCart.quantity === 1) {
                                                dispatch(dec());
                                            }

                                            dispatch(removeItem(item.id));
                                            toast.info("Removed from cart", {
                                                position: "bottom-right",
                                                autoClose: 2000,
                                            });
                                        } else {
                                            toast.error("This item not added yet!", {
                                                position: "bottom-right",
                                                autoClose: 2000,
                                            });
                                        }
                                    }}
                                >
                                    <FaMinus size={14} /> Remove
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* <ToastContainer position="bottom-right" autoClose={1000} /> */}
        </div>
    );
}

export default Products;