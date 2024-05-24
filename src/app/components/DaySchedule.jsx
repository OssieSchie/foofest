import React from "react";

function DaySchedule({ name, info }) {
  return (
    <div>
      <h3>{name}</h3>
      <ul className="grid grid-cols-2 gap-2">
        {info.map((activity, index) => (
          <li
            key={index}
            className="even:bg-white-off-00 even:text-dark-grey-00"
          >
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
