"use client";
import React from "react";
import { useState } from "react";
import SingleTicket from "./SingleTicket";

export default function FillTicket({
  ticketAmount,
  parentTicket,
  setTotalGreen,
  totalGreen,
  setTotalVip,
  totalVip,
}) {
  // const [isFinal, setIsFinal] = useState(false)

  const ticketArray = [];

  function fillTicket(newTicket) {
    ticketArray.push(newTicket);
    console.log(ticketArray);
  }

  function pushToParentTicket() {
    parentTicket.groupedTickets.push(ticketArray);
    // parentTicket.index[0].amount = ticketAmount;
    //^Push ticketAmount til amount i parent ticket objektet med generel info
    console.log("pushed ticketArray to parentTicket: ", parentTicket);

    // parentTicket.groupedTickets.forEach(group => {
    //   group.forEach(ticket => {if (ticket.isVip==="true")})
    // })
  }

  return (
    <div className="border border-x border-y-0">
      <h3 className="p-2 bg-white-off-00 text-dark-grey-00 mb-2">
        please fill out your {ticketAmount} tickets
      </h3>
      <div className="flex flex-row gap-2 overflow-x-scroll mx-2">
        {Array.from({ length: ticketAmount }, (_, index) => (
          <SingleTicket
            key={index}
            fillTicket={fillTicket}
            isLast={index === ticketAmount - 1}
            ticketNr={index}
            ticketAmount={ticketAmount}
            pushToParentTicket={pushToParentTicket}
            setTotalGreen={setTotalGreen}
            totalGreen={totalGreen}
            totalVip={totalVip}
            setTotalVip={setTotalVip}
          />
        ))}
      </div>
    </div>
  );
}
