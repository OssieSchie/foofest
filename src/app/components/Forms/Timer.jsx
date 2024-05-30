import React, { useState, useEffect, useRef } from "react";
import Countdown from "react-countdown";

export default function Timer({ showTimer, ticketAmount, setProcess }) {
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

  function handleFinish() {
    setProcess(`NoTime`);
  }

  return (
    <div className="fixed top-12 left-0 md:static">
      {showTimer && endTime && (
        <div className="flex flex-col gap-2 text-center my-4 border border-white-off-00 rounded-md md:ml-4">
          <p className="bg-white-off-00 text-dark-grey-00">
            Please fill your {ticketAmount === 1 ? "ticket" : "tickets"} in the
            allotted time
          </p>
          <Countdown date={endTime} onComplete={handleFinish} />
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
