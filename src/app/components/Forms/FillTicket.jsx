import React from "react";
import SingleTicket from "./SingleTicket";

export default function FillTicket({ ticketAmount }) {
  return (
    <div>
      <p>please fill out your {ticketAmount} tickets</p>
      <div className="flex flex-row gap-2 overflow-x-scroll mx-auto">
        {Array.from({ length: ticketAmount }, (_, index) => (
          <SingleTicket key={index} />
        ))}
      </div>
    </div>
  );
}
