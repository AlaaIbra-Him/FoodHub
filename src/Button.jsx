import "./main.css"

function Button(props) {
    return (
        <button 
            className="px-6 py-3 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-amber-50 font-bold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg shadow-md" 
            onClick={props.onClick}
        >
            {props.bName}
        </button>
    )
}

export default Button