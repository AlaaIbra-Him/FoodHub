import { useSelector, useDispatch } from "react-redux";
import { removeItem, clearCart } from "./cartslice";
import { reset, dec } from "./counterModel";
import { toast } from "react-toastify";


function CartPage() {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart.items);


  return (

    <div className="p-4 text-white mt-[4rem]  flex flex-col items-center gap-3 ">
      <h2 className="text-4xl font-bold mb-4" >My Cart</h2>
      {cart.length === 0 && (
        <p className="text-center text-gray-400 text-xl mt-10">No Items Added Yet  </p>)}
      {cart.length > 0 && (
        <div className="flex flex-col gap-4 items-center">
          <div className="grid grid-cols-4  gap-4 ">
            {cart.map(item => (
              <div key={item.id} className="border-sky-100 border-1 my-4 p-2 flex flex-col items-center rounded-2xl ">
                <img src={item.image} alt="" className="my-2 w-[10rem]" />
                <h3 className="text-2xl ">{item.name} </h3>
                <h3 className="text-2xl border-amber-50 border-1 rounded-xl px-5 my-3">{item.quantity}</h3>
                <button
                  className="bg-red-600 px-3 py-1 my-2 rounded"
                  onClick={() => {
                    dispatch(dec());
                    dispatch(removeItem(item.id));
                    toast.info("Removed from cart");
                  }}>Remove</button>
              </div>
            ))}
          </div>
          <button
            className="mb-1 bg-red-600  px-4 py-2 rounded "
            onClick={() => {
              dispatch(clearCart());
              dispatch(reset());
            }}>Clear All</button>
        </div>)}
    </div >
  );
}

export default CartPage;
