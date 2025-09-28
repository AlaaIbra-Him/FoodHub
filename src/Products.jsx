import { useEffect, useState  } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch , useSelector } from "react-redux";
import { inc, dec } from "./counterModel";
import { addToCart, removeItem } from "./cartslice";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Products() {
    const dispatch = useDispatch();
    const [myData, setmyData] = useState([]);
    const cart = useSelector(state => state.cart.items);



    async function handelData() {
        const res = await fetch("https://dummyjson.com/recipes");
        const mydata = await res.json();
        setmyData(mydata.recipes);
    }

    useEffect(() => {
        handelData();
    }, []);

    return (
        <div>
            <div className="flex flex-wrap justify-center">
                {myData.map(item => (
                    <div
                        key={item.id}
                        className="p-6 text-center text-gray-100 w-[23rem] border-blue-200 border-1 m-1">
                        <h2 className="text-center text-xl font-bold my-5">{item.name}</h2>
                        <img className="w-100 mb-4" src={item.image} alt="" />
                        <NavLink to={`/prodectsDetails/${item.id}`}>more details...</NavLink>

                        <div className="flex mt-3 justify-around">
                            <button
                                className="px-3 py-1 bg-green-600 rounded"
                                onClick={() => {
                                    dispatch(inc());
                                    dispatch(addToCart(item));
                                    toast.success("Added to cart successfully");
                                }}>Add +</button>

                            <button
                                className="px-3 py-1 bg-red-600 rounded"
                                onClick={() => {
                                    const isExist = cart.some(cartItem => cartItem.id === item.id);

                                    if (isExist) {
                                        dispatch(dec());
                                        dispatch(removeItem(item.id));
                                        toast.info("Removed from cart");
                                    } else {
                                        toast.error("This Item not added yet");
                                    }
                                }}>Remove -</button>
                        </div>
                    </div>
                ))}
            </div>
            <ToastContainer position="bottom-right" autoClose={1000} />
        </div>
    );
}

export default Products;
