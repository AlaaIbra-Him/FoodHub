import fur1 from "./assets/f1.png"
import fur2 from "./assets/f2.png"
import fur3 from "./assets/f3.png"
import fur4 from "./assets/f4.png"
// import fur5 from "./assets/f5.png"
// import fur6 from "./assets/f6.png"
import Card from "./Card"
// import './cards.css'

function Cards() {
    return (
        <div >
            <div className="flex flex-col  gap-3 items-center text-amber-50 mt-9">
                <h1 className=" text-4xl mt-9 font-bold ">OUR Populer Dishs</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde consequuntur facere totam eveniet </p>
            </div>

            <div className="cards">
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

