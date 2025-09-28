import { useDispatch, useSelector } from "react-redux";
import { inc, dec } from './counterModel';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addToCart, removeItem } from "./cartslice";




function Card(props) {
    const dispatch = useDispatch();
    const currentItem = {
        id: props.id,
        name: props.head,
        image: props.imgSrc,
    };
    const cart = useSelector(state => state.cart.items);

    return (
        <div className="card justify-center text-amber-50">
            <img className="card__img " src={props.imgSrc} alt="furniture" />
            <h2 className="text-xl  my-3 font-bold">{props.head}</h2>

            <div className="flex gap-[6rem] font-medium   my-2">
                <p>$200.00</p>
                <p>BUY NOW</p>
            </div>

            <div className="flex justify-center my-2 items-center gap-9">
                <button
                    onClick={() => {
                        dispatch(inc());
                        dispatch(addToCart(currentItem));
                        toast.success("Added to cart successfully");
                    }}
                    className="px-3 py-1 bg-green-600 rounded">Add</button>

                <button
                    onClick={() => {
                        const isExist = cart.some(cartItem => cartItem.id === currentItem.id);
                        if (isExist) {
                            dispatch(dec());
                            dispatch(removeItem(currentItem.id));
                            toast.info("Removed from cart");
                        }else{
                            toast.error("This Item not added yet");

                        }
                    }}
                    className="px-3 py-1 bg-red-600 rounded">Remove</button>
            </div>
            <ToastContainer position="bottom-right" autoClose={1000} />
        </div>
    );
}

export default Card;
