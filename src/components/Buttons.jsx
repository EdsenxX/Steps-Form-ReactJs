const Button = (props) => {
    return ( 
        <button className="w-1/2 border border-white p-2 rounded-md transform hover:scale-105">{props.title}</button>
     );
}
 
export default Button;