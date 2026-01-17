import { useSelector, useDispatch } from "react-redux";
import { removeItem, clearCart, addToCart } from "./cartslice";
import { reset, dec } from "./counterModel";
import { toast } from "react-toastify";
import { FaTrash, FaShoppingCart, FaPlus, FaMinus } from 'react-icons/fa';

function CartPage() {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart.items);
  const total = cart.reduce((sum, item) => sum + (200 * item.quantity), 0);

  return (
    <div className="p-4 md:p-8 text-white mt-14 mb-16 min-h-screen">
      {/* Header */}
      <div className="flex items-center gap-3 mb-8 justify-center">
        <FaShoppingCart size={32} className='text-amber-400' />
        <h2 className="text-4xl md:text-5xl font-bold text-amber-50">My Cart</h2>
      </div>

      {cart.length === 0 ? (
        <div className="flex flex-col items-center justify-center gap-6 py-20">
          <FaShoppingCart size={80} className='text-gray-600' />
          <p className="text-2xl text-gray-400 font-medium">No Items Added Yet</p>
          <p className="text-gray-500">Add some delicious dishes to get started!</p>
        </div>
      ) : (
        <div className="flex flex-col gap-8">
          {/* Items Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {cart.map(item => (
              <div 
                key={item.id} 
                className='border-2 border-green-700 rounded-xl overflow-hidden bg-gray-800 hover:border-amber-400 transition-all duration-300 hover:shadow-lg hover:shadow-amber-400/20'
              >
                {/* Image */}
                <div className='overflow-hidden bg-gray-900 h-48'>
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className='w-full h-full object-cover hover:scale-110 transition-transform duration-300'
                  />
                </div>

                {/* Content */}
                <div className='p-4 flex flex-col gap-4'>
                  <h3 className='text-xl font-bold text-amber-50'>{item.name}</h3>
                  
                  {/* Quantity Badge */}
                  <div className='flex items-center justify-between'>
                    <span className='text-amber-400 font-bold text-lg'>
                      ${(200 * item.quantity).toFixed(2)}
                    </span>
                    <div className='bg-green-700 text-amber-50 px-3 py-1 rounded-full font-bold'>
                      Qty: {item.quantity}
                    </div>
                  </div>

                  {/* Remove Button */}
                  <div className='flex gap-2'>
                    <button
                      className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white rounded-lg font-medium py-2 transition-all duration-300 transform hover:scale-105"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        dispatch(addToCart(item));
                        toast.info("Quantity increased", {
                          position: "bottom-right",
                          autoClose: 1500,
                        });
                      }}
                    >
                      <FaPlus size={14} />
                    </button>

                    <button
                      className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white rounded-lg font-medium py-2 transition-all duration-300 transform hover:scale-105"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        // If it's the last quantity, decrement counter and remove
                        if (item.quantity === 1) {
                          dispatch(dec());
                          dispatch(removeItem(item.id));
                          toast.info("Item removed from cart", {
                            position: "bottom-right",
                            autoClose: 1500,
                          });
                        } else {
                          // Just decrease quantity
                          dispatch(removeItem(item.id));
                          toast.info("Quantity decreased", {
                            position: "bottom-right",
                            autoClose: 1500,
                          });
                        }
                      }}
                    >
                      <FaMinus size={14} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
{/* ============================================================ */}
          {/* Summary Section */}
          <div className='flex flex-col self-center lg:flex-row gap-8 mt-8'>
            {/* Summary Box */}
            <div className='lg:ml-auto flex-shrink-0 bg-gray-800 border-2 border-green-700 rounded-xl p-8 w-full lg:w-96'>
              <h3 className='text-2xl font-bold text-amber-50 mb-6'>Order Summary</h3>
              
              <div className='space-y-4 mb-6'>
                <div className='flex justify-between text-gray-300'>
                  <span>Subtotal</span>
                  <span>${total.toFixed(2)}</span>
                </div>
                <div className='flex justify-between text-gray-300'>
                  <span>Shipping</span>
                  <span className='text-green-400'>Free</span>
                </div>
                <div className='flex justify-between text-gray-300'>
                  <span>Tax (10%)</span>
                  <span>${(total * 0.1).toFixed(2)}</span>
                </div>
              </div>

              <div className='h-px bg-green-700 mb-6'></div>

              <div className='flex justify-between text-amber-50 text-2xl font-bold mb-8'>
                <span>Total</span>
                <span className='text-amber-400'>${(total * 1.1).toFixed(2)}</span>
              </div>

              <button className='w-full py-3 bg-gradient-to-r from-amber-400 to-amber-500 text-gray-950 font-bold rounded-lg hover:from-amber-500 hover:to-amber-600 transition-all duration-300 transform hover:scale-105'>
                Checkout
              </button>
            </div>
          </div>

          {/* Clear Cart Button */}
          <button
            className="mt-8 px-6 py-3 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white rounded-lg font-bold transition-all duration-300 transform"
            onClick={() => {
              dispatch(clearCart());
              dispatch(reset());
              toast.info("Cart cleared", {
                position: "bottom-right",
                autoClose: 2000,
              });
            }}
          >
            Clear All Items
          </button>
        </div>
      )}
    </div>
  );
}

export default CartPage;