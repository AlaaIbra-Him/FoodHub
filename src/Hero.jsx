import hero_img from "./assets/slider-img.png"
import { useNavigate } from 'react-router-dom'
import Button from "./Button"

function Hero() {
  const navigate = useNavigate();

  return (
    <div className='hero mt-20'>
      <div className="hero__content flex flex-col justify-center">
        <h2 className="text-5xl md:text-6xl font-bold my-6 text-amber-50 leading-tight">
          Download our <span className='text-amber-400'>mobile apps</span>
        </h2>

        <p className='text-lg text-gray-300 mb-8 max-w-xl leading-relaxed'>
          Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone. To us, it's not just work. We take pride in the solutions we deliver.
        </p>

        <div className='flex gap-4 flex-wrap'>
          <button
            className='px-8 py-3 bg-gradient-to-r from-amber-400 to-amber-500 text-gray-950 font-bold rounded-lg hover:from-amber-500 hover:to-amber-600 transition-all duration-300 transform hover:scale-105 shadow-lg'
            onClick={() => navigate('/about')}
          >
            Contact Us
          </button>

          <button
            className='px-8 py-3 border-2 border-amber-400 text-amber-400 font-bold rounded-lg hover:bg-amber-400 hover:text-gray-950 transition-all duration-300 transform hover:scale-105'
            onClick={() => navigate('/about')}
          >
            About Us
          </button>
        </div>
      </div>

      <div className="hero__imgs flex items-center justify-center">
        <img
          src={hero_img}
          alt="hero"
          className='max-w-full h-auto drop-shadow-2xl transition-transform duration-300 hover:scale-105'
        />
      </div>
    </div>
  )
}

export default Hero