import "./main.css"
function Button(props){
    return(
        <button  className= "px-3 py-1 bg-green-900 m-2 font-medium rounded hover:bg-white hover:text-emerald-800 " onClick={props.onClick}>{props.bName}</button>

    )
}
export default Button