import about_img1 from "./assets/b1.jpg"
import about_img2 from "./assets/b2.jpg"
import about_img3 from "./assets/b3.jpg"
import Blog from "./Blog"
// import "./main.css"

function Blogs() {
    return (
      <div className="flex flex-col justify-center align-middle mt-[8rem] text-amber-50">
         <h1 className="text-5xl self-center mb-9" >Latest Blog</h1>
        <div className="blogs">
            <Blog imgSrcB={about_img1} headb={"Look even slightly believable. If you are"} />
            <Blog imgSrcB={about_img2} headb={"Anything embarrassing hidden in the middle"} />
            <Blog imgSrcB={about_img3} headb={"Modestias magni natus dolores odio commodi"} />
        </div>
      </div>
    )
}
export default Blogs