import React, { useState, useEffect, useRef } from "react";
import Countdown from "react-countdown";

export default function Timer({ showTimer, ticketAmount }) {
  const [endTime, setEndTime] = useState(null);
  const endTimeRef = useRef(null);

  useEffect(() => {
    if (showTimer && !endTimeRef.current) {
      const newEndTime = Date.now() + 300000; // Set end time to 5 minutes from now
      setEndTime(newEndTime);
      endTimeRef.current = newEndTime;
    } else if (!showTimer) {
      setEndTime(null);
      endTimeRef.current = null;
    }
  }, [showTimer]);

  return (
    <div>
      {showTimer && endTime && (
        <div className="flex flex-col gap-2 text-center">
          <p>
            Please fill your {ticketAmount === 1 ? "ticket" : "tickets"} in the
            allotted time
          </p>
          <Countdown date={endTime} />
        </div>
      )}
    </div>
  );
}
// "use client";
// import React, { useRef, useEffect, useState } from "react";
// import Countdown from "react-countdown";

// export default function Timer({ showTimer, ticketAmount }) {
//   // Use useRef to store the end time
//   const endTimeRef = useRef(null);

//   const [time, setTime] = useState(showTimer * 300000);

//   const timerTime = time;

//   // Initialize the end time only once when the component mounts
//   useEffect(() => {
//     if (!endTimeRef.current) {
//       endTimeRef.current = Date.now() + timerTime; // 5 minutes from now
//     }
//   }, []);

//   return (
//     <div>
//       {showTimer === 1 && (
//         <div className="flex flex-col gap-2 text-center">
//           <p>
//             Please fill your {ticketAmount === 1 ? "ticket" : "tickets"} in the
//             allotted time
//           </p>
//           <Countdown date={endTimeRef.current} />
//         </div>
//       )}
//     </div>
//   );
// }
