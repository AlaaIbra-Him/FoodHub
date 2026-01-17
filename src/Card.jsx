import { useDispatch, useSelector } from "react-redux";
import { inc, dec } from './counterModel';
import { toast } from 'react-toastify';
import { addToCart, removeItem } from "./cartslice";
import { FaPlus, FaMinus } from 'react-icons/fa';

function Card(props) {
    const dispatch = useDispatch();
    const currentItem = {
        id: props.id,
        name: props.head,
        image: props.imgSrc,
    };
    const cart = useSelector(state => state.cart.items);

    const handleAddToCart = (e) => {
        e.preventDefault();
        e.stopPropagation();

        // Check if item already exists
        const itemExists = cart.some(cartItem => cartItem.id === currentItem.id);

        // Only increment counter if it's a new item
        if (!itemExists) {
            dispatch(inc());
        }

        dispatch(addToCart(currentItem));
        toast.success("Added to cart!", {
            position: "bottom-right",
            autoClose: 1500,
        });
    };

    const handleRemoveFromCart = (e) => {
        e.preventDefault();
        e.stopPropagation();
        const isExist = cart.some(cartItem => cartItem.id === currentItem.id);
        if (isExist) {

            const itemInCart = cart.find(cartItem => cartItem.id === currentItem.id);
            // If it's the last quantity, decrement counter
            if (itemInCart && itemInCart.quantity === 1) {
                dispatch(dec());
            }

            dispatch(removeItem(currentItem.id));
            toast.info("Removed from cart", {
                position: "bottom-right",
                autoClose: 1500,
            });
        } else {
            toast.error("This item not added yet!", {
                position: "bottom-right",
                autoClose: 1500,
            });
        }
    };

    return (
        <div className="card group bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-green-700 flex flex-col h-full">

            {/* Image Container */}
            <div className='relative overflow-hidden bg-gray-900 h-48'>
                <img
                    className="card__img w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    src={props.imgSrc}
                    alt={props.head}
                />
                <div className='absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-300'></div>
            </div>

            {/* Content */}
            <div className='p-5 flex flex-col gap-3 flex-grow'>
                <h2 className="text-xl font-bold text-amber-50 group-hover:text-amber-400 transition-colors duration-300 line-clamp-2">
                    {props.head}
                </h2>

                {/* Price */}
                <div className="flex items-center justify-between">
                    <p className='text-amber-400 font-bold text-xl'>$200.00</p>
                    <span className='text-xs bg-green-700 text-amber-50 px-3 py-1 rounded-full font-medium'>Popular</span>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 mt-auto">
                    <button
                        type="button"
                        onClick={handleAddToCart}
                        className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white rounded-lg font-medium transition-all duration-300 transform hover:scale-105 active:scale-95"
                    >
                        <FaPlus size={14} /> Add
                    </button>

                    <button
                        type="button"
                        onClick={handleRemoveFromCart}
                        className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white rounded-lg font-medium transition-all duration-300 transform hover:scale-105 active:scale-95"
                    >
                        <FaMinus size={14} /> Remove
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Card;