"use client";
// import { useState } from "react";
import ScheduleBtn from "./ScheduleBtn";
import DaySchedule from "./DaySchedule";

// async function Stages(props) {
function Stages({ name, mon, tue, wed, thu, fri, sat, sun }) {
  // const [day, setDay] = useState(mon);
  let day = mon;

  function setDay(newDay) {
    day = newDay;
    console.log(newDay);
  }

  return (
    <div>
      <h2>{name}</h2>
      <div>
        <div className="grid grid-cols-7">
          <button onClick={() => (day = mon)}>Monday</button>
          <button onClick={() => (day = tue)}>Tuesday</button>
          {/* <ScheduleBtn day={"Monday"} value={"mon"} /> */}
          {/* <ScheduleBtn day={"Tuesday"} value={"tue"} /> */}
          <ScheduleBtn day={"Wednesday"} value={"wed"} />
          <ScheduleBtn day={"Thursday"} value={"thu"} />
          <ScheduleBtn day={"Friday"} value={"fri"} />
          <ScheduleBtn day={"Saturday"} value={"sat"} />
          <ScheduleBtn day={"Sunday"} value={"sun"} />
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
