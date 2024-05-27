"use client";
import { useState } from "react";
import ScheduleBtn from "./ScheduleBtn";
import DaySchedule from "./DaySchedule";
import styles from "./Stages.module.css";
import { rock_salt } from "../fonts";

// async function Stages(props) {
function Stages({ name, mon, tue, wed, thu, fri, sat, sun }) {
  const [day, setDay] = useState(mon);
  // let day = mon;

  function daySetter(newDay) {
    // console.log(newDay);
    setDay(newDay);
  }
  console.log(mon);

  const [expanded, setExpanded] = useState(false);

  function handleChange() {
    setExpanded((expand) => !expand);
  }

  return (
    <div className="md:w-[800px]">
      <div className="h-[200px] flex flex-col items-center">
        <div className="h-[150px] w-full flex bg-white-off-20">
          <h2
            className={`inline mx-auto my-auto bg-accent-00 text-white-off-00 py-4 px-8 shadow-[0_10px_30px_rgba(0,0,0,0.3)] ${rock_salt.className}`}
          >
            {name}
          </h2>
        </div>

        <button
          className="hover:font-bold h-[50px] w-full bg-dark-grey-00 text-white-off-00"
          onClick={handleChange}
        >
          Schedule
        </button>
      </div>

      <div
        className={`${
          expanded ? styles.open : styles.closed
        } grid grid-cols-4 mx-auto`}
      >
        <div className="grid grid-rows-7 gap-2 px-4">
          <button
            className="hover:bg-white-off-00 focus:bg-white-off-00 hover:text-dark-grey-00 rounded-md focus:text-dark-grey-00 bg-white-off-20 h-8"
            onClick={() => {
              daySetter(mon);
            }}
          >
            Monday
          </button>
          <button
            className="hover:bg-white-off-00 focus:bg-white-off-00 hover:text-dark-grey-00 rounded-md focus:text-dark-grey-00 bg-white-off-20 h-8"
            onClick={() => {
              daySetter(tue);
            }}
          >
            Tuesday
          </button>
          <button
            className="hover:bg-white-off-00 focus:bg-white-off-00 hover:text-dark-grey-00 rounded-md focus:text-dark-grey-00 bg-white-off-20 h-8"
            onClick={() => {
              daySetter(wed);
            }}
          >
            Wednesday
          </button>
          <button
            className="hover:bg-white-off-00 focus:bg-white-off-00 hover:text-dark-grey-00 rounded-md focus:text-dark-grey-00 bg-white-off-20 h-8"
            onClick={() => {
              daySetter(thu);
            }}
          >
            Thursday
          </button>
          <button
            className="hover:bg-white-off-00 focus:bg-white-off-00 hover:text-dark-grey-00 rounded-md focus:text-dark-grey-00 bg-white-off-20 h-8"
            onClick={() => {
              daySetter(fri);
            }}
          >
            Friday
          </button>
          <button
            className="hover:bg-white-off-00 focus:bg-white-off-00 hover:text-dark-grey-00 rounded-md focus:text-dark-grey-00 bg-white-off-20 h-8"
            onClick={() => {
              daySetter(sat);
            }}
          >
            Saturday
          </button>
          <button
            className="hover:bg-white-off-00 focus:bg-white-off-00 hover:text-dark-grey-00 rounded-md focus:text-dark-grey-00 bg-white-off-20 h-8"
            onClick={() => {
              daySetter(sun);
            }}
          >
            Sunday
          </button>
        </div>

        <div className="flex flex-col items-center col-span-3 mx-auto min-w-full">
          {day === mon && <DaySchedule name={"Monday"} info={mon} />}
          {day === tue && <DaySchedule name={"Tuesday"} info={tue} />}
          {day === wed && <DaySchedule name={"Wednesday"} info={wed} />}
          {day === thu && <DaySchedule name={"Thursday"} info={thu} />}
          {day === fri && <DaySchedule name={"Friday"} info={fri} />}
          {day === sat && <DaySchedule name={"Saturday"} info={sat} />}
          {day === sun && <DaySchedule name={"Sunday"} info={sun} />}
        </div>
      </div>
      {/* ^ 1 component der læser værdi af useState(day) og tegner det ^ */}
    </div>
  );
}

export default Stages;
