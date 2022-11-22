import classes from "./InputComponent.module.css";

const InputComponent = (props) => {
  return (
    <div
      className={`${classes["input-container"]} ${
        props.inputInvalid ? classes["invalid-input"] : classes["valid-input"]
      } ${props.className}`}
    >
      <label htmlFor={props.id}>{props.label}</label>
      <input
        type={props.type}
        id={props.id}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
      {props.inputInvalid && <small>{props.errorText}</small>}
    </div>
  );
};

export default InputComponent;
