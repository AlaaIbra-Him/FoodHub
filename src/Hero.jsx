import hero_img from "./assets/slider-img.png"
import { useNavigate } from 'react-router-dom'

import Button from "./Button"

function Hero() {
  const navigate = useNavigate();

    return (

    
  <div className='hero'>
    <div className="hero__content">
        <h2 className="text-3xl font-bold my-4">Download our mobile apps</h2>
<p >Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone. To us, it’s not just work. We take pride 
in the solutions we deliver Our dedicated patient engagement app and 
</p>
<Button className=' ' bName={"Contact Us"}/> 
<Button onClick={() => navigate('/about')} bName={"About Us"}/> 

    </div>
    <div className="hero__imgs">
        <img src={hero_img} alt=" img" />
    </div>
  </div>
)
}
export default Hero