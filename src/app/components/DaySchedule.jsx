import React from "react";

function DaySchedule({ name, info }) {
  return (
    <div>
      <h3>{name}</h3>
      <ul>
        {info.map((activity, index) => (
          <li key={index}>
            {activity.start} - {activity.end}: {activity.act}
          </li>
        ))}
      </ul>
      {/* <p>
        {props.start} - {props.end} : {props.act}
      </p> */}
    </div>
  );
}

export default DaySchedule;
