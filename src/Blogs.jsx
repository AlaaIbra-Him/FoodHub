import about_img1 from "./assets/b1.jpg"
import about_img2 from "./assets/b2.jpg"
import about_img3 from "./assets/b3.jpg"
import Blog from "./Blog"

function Blogs() {
    return (
        <div className="flex flex-col justify-center items-center pt-20 mb-20 text-amber-50">
            {/* Header Section */}
            <div className='flex flex-col gap-4 items-center mb-12'>
                <h1 className="text-5xl md:text-6xl font-bold text-center">
                    Latest <span className='text-amber-400'>Blog Posts</span>
                </h1>
                <p className='text-gray-400 max-w-2xl text-center text-lg'>
                    Stay updated with our latest articles, recipes, and food culture insights
                </p>
                <div className='h-1 w-24 bg-gradient-to-r from-green-500 to-amber-400 rounded-full'></div>
            </div>

            {/* Blog Grid */}
            <div className="blogs grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-8 max-w-7xl w-full">
                <Blog imgSrcB={about_img1} headb={"Look even slightly believable. If you are"} />
                <Blog imgSrcB={about_img2} headb={"Anything embarrassing hidden in the middle"} />
                <Blog imgSrcB={about_img3} headb={"Modestias magni natus dolores odio commodi"} />
            </div>
        </div>
    )
}

export default Blogs