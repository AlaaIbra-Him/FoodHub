import Button from "./Button"

function Blog(props) {
    return (
        <div className="blog">
            <img className="blog__img" src={props.imgSrcB} alt="furniture" />
            <h2>{props.headB} </h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis eius vel illum molestias eveniet natus, dolor officiis obcaecati quod quam doloribus.</p>
       <Button bName={"Read More"}/>
        </div>
    )
}
export default Blog