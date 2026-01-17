import about_img from "./assets/about-img.png"

function About() {
    return (
        <div className='hero mt-20 mb-2 mx-0'>
            {/* Image Container */}
            <div className="hero__imgs flex items-center justify-center">
                <img 
                    src={about_img} 
                    alt="About us" 
                    className='max-w-full h-auto drop-shadow-2xl transition-transform duration-300 hover:scale-105'
                />
            </div>

            {/* Content Container */}
            <div className="hero__content flex flex-col justify-center">
                <h2 className='text-5xl md:text-6xl font-bold text-amber-50 mb-6'>
                    About <span className='text-amber-400'>Us</span>
                </h2>

                <p className='text-lg text-gray-300 mb-8 leading-relaxed max-w-xl'>
                    Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone. To us, it's not just work. We take pride in the solutions we deliver. Our dedicated patient engagement app and comprehensive platform make quality food and healthcare accessible to everyone.
                </p>

                <div className='flex gap-4 mb-8'>
                    <div className='flex items-center gap-3'>
                        <div className='w-12 h-12 bg-gradient-to-br from-green-500 to-amber-400 rounded-full flex items-center justify-center'>
                            <span className='text-2xl'>✓</span>
                        </div>
                        <div>
                            <h3 className='font-bold text-amber-50'>Quality Service</h3>
                            <p className='text-sm text-gray-400'>Premium experience</p>
                        </div>
                    </div>

                    <div className='flex items-center gap-3'>
                        <div className='w-12 h-12 bg-gradient-to-br from-green-500 to-amber-400 rounded-full flex items-center justify-center'>
                            <span className='text-2xl'>✓</span>
                        </div>
                        <div>
                            <h3 className='font-bold text-amber-50'>24/7 Support</h3>
                            <p className='text-sm text-gray-400'>Always here for you</p>
                        </div>
                    </div>
                </div>

                <button className='px-8 py-3 bg-gradient-to-r mb-20 from-amber-400 to-amber-500 text-gray-950 font-bold rounded-lg hover:from-amber-500 hover:to-amber-600 transition-all duration-300 transform hover:scale-105 shadow-lg w-fit'>
                    Read More
                </button>
            </div>
        </div>
    )
}

export default About