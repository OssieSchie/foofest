// import React from "react";
// import Countdown from "react-countdown";

// export default function Timer({ showTimer, ticketAmount }) {
//   return (
//     <div>
//       {showTimer && (
//         <div className="flex flex-col gap-2 text-center">
//           <p>
//             Please Fill you {ticketAmount == 1 ? "ticket" : "tickets"} in the
//             allotted time
//           </p>
//           <Countdown date={Date.now() + 300000} />
//         </div>
//       )}
//     </div>
//   );
// }
"use client";
import React, { useRef, useEffect, useState } from "react";
import Countdown from "react-countdown";

export default function Timer({ showTimer, ticketAmount }) {
  // Use useRef to store the end time
  const endTimeRef = useRef(null);

  const [time, setTime] = useState(showTimer * 300000);

  const timerTime = time;

  // Initialize the end time only once when the component mounts
  useEffect(() => {
    if (!endTimeRef.current) {
      endTimeRef.current = Date.now() + timerTime; // 5 minutes from now
    }
  }, []);

  return (
    <div>
      {showTimer === 1 && (
        <div className="flex flex-col gap-2 text-center">
          <p>
            Please fill your {ticketAmount === 1 ? "ticket" : "tickets"} in the
            allotted time
          </p>
          <Countdown date={endTimeRef.current} />
        </div>
      )}
    </div>
  );
}
