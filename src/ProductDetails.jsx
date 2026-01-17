import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { NavLink } from "react-router-dom";
import { FaArrowLeft, FaClock, FaUsers, FaCheckCircle, FaListOl } from 'react-icons/fa';

function ProductDetails() {
  const params = useParams()
  const [myDetails, setMyDetails] = useState(null)
  const [loading, setLoading] = useState(true)

  async function handelDetails() {
    try {
      const res = await fetch(`https://dummyjson.com/recipes/${params.id}`);
      const details = await res.json();
      setMyDetails(details)
    } catch (error) {
      console.error("Error fetching details:", error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    handelDetails()
  }, [params.id])

  if (loading) {
    return (
      <div className='flex justify-center items-center min-h-screen text-amber-400 text-2xl font-bold'>
        Loading recipe details...
      </div>
    )
  }

  return (
    <div className='text-amber-50 min-h-screen mt-20 mb-16 px-4 md:px-8'>
      {myDetails ? (
        <div className='max-w-6xl mx-auto'>
          
          {/* Back Button */}
          <NavLink 
            to={`/products`}
            className="inline-flex items-center gap-2 px-6 py-3 bg-green-700 hover:bg-amber-400 hover:text-gray-950 rounded-lg font-bold mb-8 transition-all duration-300 transform hover:scale-105"
          >
            <FaArrowLeft size={16} /> Back to Menu
          </NavLink>

          {/* Main Content */}
          <div className='grid md:grid-cols-2 gap-12 items-start'>
            
            {/* Image Section */}
            <div className='flex flex-col gap-4'>
              <div className='rounded-xl overflow-hidden border-2 border-green-700 shadow-2xl'>
                <img 
                  src={myDetails.image} 
                  alt={myDetails.name}
                  className='w-full h-auto hover:scale-110 transition-transform duration-300'
                />
              </div>
            </div>

            {/* Details Section */}
            <div className='flex flex-col gap-6'>
              
              {/* Title */}
              <div>
                <h1 className='text-5xl md:text-6xl font-bold mb-4'>
                  {myDetails.name}
                </h1>
                <p className='text-gray-400 text-lg'>
                  {myDetails.description || "Delicious recipe prepared with premium ingredients"}
                </p>
              </div>

              {/* Recipe Info */}
              <div className='grid grid-cols-3 gap-4'>
                <div className='bg-gray-800 border border-green-700 rounded-lg p-4 text-center hover:border-amber-400 transition-colors duration-300'>
                  <FaClock className='text-amber-400 mx-auto mb-2' size={24} />
                  <p className='text-gray-400 text-sm'>Prep Time</p>
                  <p className='font-bold text-lg text-amber-50'>{myDetails.prepTimeMinutes}m</p>
                </div>
                <div className='bg-gray-800 border border-green-700 rounded-lg p-4 text-center hover:border-amber-400 transition-colors duration-300'>
                  <FaClock className='text-amber-400 mx-auto mb-2' size={24} />
                  <p className='text-gray-400 text-sm'>Cook Time</p>
                  <p className='font-bold text-lg text-amber-50'>{myDetails.cookTimeMinutes}m</p>
                </div>
                <div className='bg-gray-800 border border-green-700 rounded-lg p-4 text-center hover:border-amber-400 transition-colors duration-300'>
                  <FaUsers className='text-amber-400 mx-auto mb-2' size={24} />
                  <p className='text-gray-400 text-sm'>Servings</p>
                  <p className='font-bold text-lg text-amber-50'>{myDetails.servings}</p>
                </div>
              </div>

              {/* Price */}
              <div className='bg-gradient-to-r from-green-700 to-green-800 rounded-lg p-6 border border-amber-400'>
                <p className='text-gray-300 mb-2'>Price</p>
                <p className='text-4xl font-bold text-amber-400'>$200.00</p>
              </div>

              {/* Action Buttons */}
              <div className='flex gap-4 flex-col sm:flex-row'>
                <button className='flex-1 px-6 py-3 bg-gradient-to-r from-amber-400 to-amber-500 text-gray-950 font-bold rounded-lg hover:from-amber-500 hover:to-amber-600 transition-all duration-300 transform hover:scale-105 text-lg'>
                  Add to Cart
                </button>
                <button className='flex-1 px-6 py-3 border-2 border-amber-400 text-amber-400 font-bold rounded-lg hover:bg-amber-400 hover:text-gray-950 transition-all duration-300 transform hover:scale-105 text-lg'>
                  Save Recipe
                </button>
              </div>
            </div>
          </div>

          {/* Ingredients Section */}
          <div className='mt-16'>
            <h2 className='text-4xl font-bold mb-8 flex items-center gap-3'>
              <FaCheckCircle size={32} className='text-amber-400' />
              Ingredients
            </h2>
            <div className='grid md:grid-cols-2 gap-6'>
              {myDetails.ingredients && myDetails.ingredients.map((ing, i) => (
                <div 
                  key={i}
                  className='flex items-start gap-4 bg-gray-800 p-4 rounded-lg border border-green-700 hover:border-amber-400 transition-colors duration-300'
                >
                  <FaCheckCircle className='text-amber-400 text-xl mt-1 flex-shrink-0' />
                  <span className='text-gray-300 text-lg'>{ing}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Instructions Section */}
          <div className='mt-16 mb-8'>
            <h2 className='text-4xl font-bold mb-8 flex items-center gap-3'>
              <FaListOl size={32} className='text-amber-400' />
              Instructions
            </h2>
            <div className='bg-gray-800 border-2 border-green-700 rounded-lg p-8'>
              {myDetails.instructions && myDetails.instructions.map((instruction, i) => (
                <div key={i} className='flex gap-4 mb-6 last:mb-0'>
                  <div className='flex-shrink-0 w-10 h-10 bg-gradient-to-br from-green-500 to-amber-400 rounded-full flex items-center justify-center font-bold text-gray-950'>
                    {i + 1}
                  </div>
                  <p className='text-gray-300 text-lg pt-1'>{instruction}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className='text-center text-2xl text-red-500 font-bold mt-20'>
          Failed to load recipe details
        </div>
      )}
    </div>
  )
}

export default ProductDetails