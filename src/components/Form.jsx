const Form = (props) => {
    return ( 
        <form className="pt-4 relative h-full">
            <h2 className="text-center text-xl">{props.title}</h2>
            <div className="my-5">
                {props.inputs}
            </div>
            <div className="absolute bottom-0 left-0 flex justify-center w-full">
                {props.buttons}
            </div>
        </form>
     );
}
 
export default Form;