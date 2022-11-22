import { useReducer } from "react";

const initialState = {
  value: "",
  isTouched: false,
};

const inputStateReducer = (state, action) => {
  if (action.type === "INPUT") {
    return {
      value: action.value,
      isTouched: state.isTouched,
    };
  }
  if (action.type === "BLUR") {
    return {
      value: state.value,
      isTouched: true,
    };
  }
  if (action.type === "RESET") {
    return { value: "", isTouched: false };
  }
  return initialState;
};

const useInput = (checkValue) => {
  const [inputState, dispatchFn] = useReducer(inputStateReducer, initialState);

  const valueIsValid = checkValue(inputState.value);
  const valueHasError = !valueIsValid && inputState.isTouched;

  const valueInputChangeHandler = (e) => {
    dispatchFn({ type: "INPUT", value: e.target.value });
  };

  const valueInputBlurHandler = () => {
    dispatchFn({ type: "BLUR" });
  };

  const resetValue = () => {
    dispatchFn({ type: "RESET" });
  };

  return {
    value: inputState.value,
    valueIsValid,
    valueHasError,
    resetValue,
    valueInputChangeHandler,
    valueInputBlurHandler,
  };
};

export default useInput;
