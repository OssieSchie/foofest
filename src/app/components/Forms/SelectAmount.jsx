"use client";
import React from "react";
import SelectCenter from "./SelectCenter";
import { useState } from "react";

export default function SelectAmount() {
  const [amount, setAmount] = useState(1);
  function handleChange(event) {
    setAmount(event.target.value);
  }
  return (
    <form>
      <fieldset>
        <legend>Book a Ticket:</legend>
        <div>
          <label htmlFor="area">Select Area you want to live in: </label>
          <select name="area" id="area" required>
            <option value="default" disabled>
              Select area
            </option>
            <option value="Midgard">Midgard</option>
            <option value="Vanaheim">Vanaheim</option>
            <option value="Jotunheim">Jotunheim</option>
          </select>
          <label htmlFor="amount">Select how many spots you want: </label>
          <input type="number" min={1} required onChange={handleChange} />
        </div>
        <div>
          <fieldset>
            <legend>Would you like the staff to set up tents for you?</legend>
            <SelectCenter
              label="No Thanks"
              id="0pers"
              value="0"
              //   checked - FIX!
              cost="0 kr."
            />
            <SelectCenter
              label="2 Person Tent"
              id="2pers"
              value="2"
              cost="299 kr."
            />
            <SelectCenter
              label="3 Person Tent"
              id="3pers"
              value="3"
              cost="399 kr."
            />
            <SelectCenter label="No Thanks" id="0pers" value="0" cost="0 kr." />
          </fieldset>
        </div>
      </fieldset>
    </form>
  );
}

//   <div>
//     <label htmlFor={props.id}>{props.label}</label>
//     <input
//       type="radio"
//       id={props.id}
//
//       value={props.value}
//       checked={props.checked}
//     />
//   </div>;
