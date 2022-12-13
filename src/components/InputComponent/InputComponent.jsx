const InputComponent = (props) => {
  return (
    <div className={`${"w-full flex flex-col mb-6"}`}>
      <label
        htmlFor={props.id}
        className="mb-2 p-0 text-lg font-bold text-stone-900"
      >
        {props.label}
      </label>
      <input
        type={props.type}
        id={props.id}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
        className={`w-full border bg-transparent rounded-lg p-3 outline-0 placeholder:text-slate-400 placeholder:text-base placeholder:font-medium  ${
          props.inputInvalid
            ? "border-red-500 focus:border-red-500 text-red-500"
            : "border-gray-400 focus:border-blue-500"
        }`}
      />
      {props.inputInvalid && (
        <small className="text-red-500 text-xs">{props.errorText}</small>
      )}
    </div>
  );
};

export default InputComponent;
