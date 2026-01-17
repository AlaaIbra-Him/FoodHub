import fur1 from "./assets/f1.png"
import fur2 from "./assets/f2.png"
import fur3 from "./assets/f3.png"
import fur4 from "./assets/f4.png"
import Card from "./Card"

function Cards() {
    return (
        <div className='pt-20 mb-20'>
            {/* Header Section */}
            <div className="flex flex-col gap-4 items-center text-amber-50 mb-12">
                <h1 className="text-5xl md:text-6xl font-bold text-center">
                    Our <span className='text-amber-400'>Popular Dishes</span>
                </h1>
                <p className='text-gray-400 max-w-2xl text-center text-lg'>
                    Discover our most loved culinary creations, crafted with passion and premium ingredients for an unforgettable dining experience.
                </p>
                <div className='h-1 w-24 bg-gradient-to-r from-green-500 to-amber-400 rounded-full'></div>
            </div>

            {/* Cards Grid */}
            <div className="cards-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-4 md:px-8 max-w-7xl mx-auto">
                <Card imgSrc={fur1} id={1} head={"Chicken Karahi"} />
                <Card imgSrc={fur2} id={2} head={"Shrimp Scampi Pasta"} />
                <Card imgSrc={fur3} id={3} head={"Saag (Spinach) with Makki"} />
                <Card imgSrc={fur4} id={4} head={"Japanese Ramen Soup"} />
                <Card imgSrc={fur1} id={5} head={"Chicken Biryani"} />
                <Card imgSrc={fur2} id={6} head={"Moroccan Chickpea Tagine"} />
            </div>
        </div>
    )
}

export default Cards