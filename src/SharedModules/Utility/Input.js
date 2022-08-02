import React from "react";
import classes from "./Utility_Css/Input.module.css";

export default function Input(props) {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input {...props.input} />
    </div>
  );
}
