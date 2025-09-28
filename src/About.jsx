import about_img from "./assets/about-img.png"
import Button from "./Button"

function About() {
    return (

        <div className='hero text-amber-50'>
            <div className="hero__imgs">
                <img src={about_img} alt=" img" />
            </div>
            <div  className="hero__content">
                <h2>About Us</h2>
                <p >Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone. To us, it’s not just work. We take pride
                    in the solutions we deliver Our dedicated patient engagement app and
                </p>
                <Button bName={"Read More"} />
            </div>
        </div>
    )
}
export default About