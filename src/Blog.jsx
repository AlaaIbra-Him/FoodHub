import Button from "./Button"
import { FaArrowRight } from 'react-icons/fa'

function Blog(props) {
    return (
        <div className="blog group bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-green-700">
            
            {/* Image Container */}
            <div className='relative overflow-hidden bg-gray-900 h-56'>
                <img 
                    className="blog__img w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" 
                    src={props.imgSrcB} 
                    alt={props.headB}
                />
                <div className='absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300'></div>
            </div>

            {/* Content */}
            <div className='p-6 flex flex-col gap-4'>
                <h2 className='text-xl font-bold text-amber-50 group-hover:text-amber-400 transition-colors duration-300 line-clamp-2'>
                    {props.headB}
                </h2>

                <p className='text-gray-400 text-sm leading-relaxed line-clamp-3 group-hover:text-gray-300 transition-colors duration-300'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis eius vel illum molestias eveniet natus, dolor officiis obcaecati quod quam doloribus.
                </p>

                {/* Read More Button */}
                <button className='flex items-center gap-2 text-amber-400 font-bold mt-2 group/btn hover:gap-3 transition-all duration-300'>
                    Read More <FaArrowRight size={12} className='group-hover/btn:translate-x-1 transition-transform duration-300' />
                </button>
            </div>
        </div>
    )
}

export default Blog