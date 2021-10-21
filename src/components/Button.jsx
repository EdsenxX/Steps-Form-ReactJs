const Button = (props) => {
  return (
    <button
      type={props.type}
      className="w-1/2 border border-white p-2 rounded-md transform hover:scale-105"
      onClick={props.onClick}
    >
      {props.title}
    </button>
  );
};

export default Button;
