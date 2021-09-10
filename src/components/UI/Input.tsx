import React, { InputHTMLAttributes } from "react";

import classes from "./Input.module.css";

type InputPropsTypes = {
  label: string;
  input: InputHTMLAttributes<HTMLInputElement>;
};

const Input = React.forwardRef<HTMLInputElement, InputPropsTypes>(
  (props: InputPropsTypes, ref) => {
    return (
      <div className={classes.input}>
        <label htmlFor={props.input.id}>{props.label}</label>
        <input ref={ref} {...props.input} />
      </div>
    );
  }
);

export default Input;
