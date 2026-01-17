import { useNavigate } from 'react-router-dom'
import { FaHome, FaArrowLeft, FaExclamationTriangle } from 'react-icons/fa'

function NotFound() {
  const navigate = useNavigate()

  return (
    <div className='mt-20 mb-20 min-h-screen flex flex-col items-center justify-center text-center px-4'>
      {/* 404 Number */}
      <div className='text-9xl md:text-[150px] font-bold text-gradient bg-gradient-to-r from-amber-400 to-red-500 bg-clip-text text-transparent mb-4'>
        404
      </div>

      {/* Icon */}
      <div className='text-6xl md:text-8xl mb-8 text-amber-400'>
        <FaExclamationTriangle size={100} />
      </div>

      {/* Title */}
      <h1 className='text-4xl md:text-5xl font-bold text-amber-50 mb-4'>
        Oops! Page Not Found
      </h1>

      {/* Description */}
      <p className='text-gray-400 text-lg md:text-xl max-w-2xl mb-8'>
        We couldn't find the recipe you're looking for. It seems like this page has taken a different direction in our kitchen!
      </p>

      {/* Action Buttons */}
      <div className='flex flex-col sm:flex-row gap-4'>
        <button
          onClick={() => navigate('/home')}
          className='flex items-center justify-center gap-2 px-8 py-3 bg-gradient-to-r from-amber-400 to-amber-500 text-gray-950 font-bold rounded-lg hover:from-amber-500 hover:to-amber-600 transition-all duration-300 transform hover:scale-105'
        >
          <FaHome size={18} /> Back to Home
        </button>

        <button
          onClick={() => navigate(-1)}
          className='flex items-center justify-center gap-2 px-8 py-3 border-2 border-amber-400 text-amber-400 font-bold rounded-lg hover:bg-amber-400 hover:text-gray-950 transition-all duration-300 transform hover:scale-105'
        >
          <FaArrowLeft size={18} /> Go Back
        </button>
      </div>

      {/* Decorative Elements */}
      <div className='mt-16 flex gap-8 text-5xl opacity-50'>
        <FaHome size={60} className='text-amber-400' />
        <FaArrowLeft size={60} className='text-amber-400' />
        <FaHome size={60} className='text-amber-400' />
      </div>
    </div>
  )
}

export default NotFound