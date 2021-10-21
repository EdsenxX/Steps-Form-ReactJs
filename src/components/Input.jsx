const Input = (props) => {
  return (
    <div className="flex items-center border-b border-white p-2 mb-2">
      <i className={`${props.icon} w-1/12`}></i>
      <input
        type={props.type}
        name={props.name}
        placeholder={props.title}
        className="bg-transparent text-white outline-none w-11/12"
      />
    </div>
  );
};

export default Input;
