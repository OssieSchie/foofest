"use client";
import { useState } from "react";
import ScheduleBtn from "./ScheduleBtn";
import DaySchedule from "./DaySchedule";

// async function Stages(props) {
function Stages({ name, mon, tue, wed, thu, fri, sat, sun }) {
  const [day, setDay] = useState(mon);
  // let day = mon;

  function daySetter(newDay) {
    // console.log(newDay);
    setDay(newDay);
  }
  console.log(mon);

  return (
    <div>
      <h2>{name}</h2>
      <div>
        <div className="grid grid-cols-7">
          <button onClick={() => daySetter(mon)}>Monday</button>
          <button
            onClick={() => {
              daySetter(tue);
            }}
          >
            Tuesday
          </button>
          <button
            onClick={() => {
              daySetter(wed);
            }}
          >
            Wednesday
          </button>
          <button
            onClick={() => {
              daySetter(thu);
            }}
          >
            Thursday
          </button>
          <button
            onClick={() => {
              daySetter(fri);
            }}
          >
            Friday
          </button>
          <button
            onClick={() => {
              daySetter(sat);
            }}
          >
            Saturday
          </button>
          <button
            onClick={() => {
              daySetter(sun);
            }}
          >
            Sunday
          </button>
        </div>
      </div>
      {day === mon && <DaySchedule name={"Monday"} info={mon} />}
      {day === tue && <DaySchedule name={"Tuesday"} info={tue} />}
      {day === wed && <DaySchedule name={"Wednesday"} info={wed} />}
      {day === thu && <DaySchedule name={"Thursday"} info={thu} />}
      {day === fri && <DaySchedule name={"Friday"} info={fri} />}
      {day === sat && <DaySchedule name={"Saturday"} info={sat} />}
      {day === sun && <DaySchedule name={"Sunday"} info={sun} />}

      {/* ^ 1 component der læser værdi af useState(day) og tegner det ^ */}
    </div>
  );
}

export default Stages;
