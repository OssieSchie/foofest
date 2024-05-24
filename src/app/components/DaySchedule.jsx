import React from "react";

function DaySchedule({ name, info }) {
  return (
    <div className="text-center">
      <h3 className="pb-2">{name}</h3>
      <ul className="grid grid-cols-2 gap-2">
        {info.map((activity, index) => (
          <li
            key={index}
            className="even:bg-white-off-00 odd:bg-dark-grey-00 even:text-dark-grey-00 text-center"
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
