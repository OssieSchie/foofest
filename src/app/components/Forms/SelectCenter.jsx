import React from "react";

export default function SelectCenter(props) {
  return (
    <div>
      <label htmlFor={props.id}>{props.label}</label>
      <input
        type="radio"
        id={props.id}
        name={props.id}
        value={props.value}
        checked={props.checked}
      />
      <p>{props.cost}</p>
    </div>
  );
}
