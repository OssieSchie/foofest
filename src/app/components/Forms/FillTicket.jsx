"use client";
import React from "react";
import { useState } from "react";
import SingleTicket from "./SingleTicket";
import styles from "./FillTicket.module.css";

export default function FillTicket({
  ticketAmount,
  parentTicket,
  setTotalGreen,
  totalGreen,
  setTotalVip,
  totalVip,
  setProcess,
}) {
  // const [isFinal, setIsFinal] = useState(false)

  // const ticketArray = [];

  const [ticketArray, setTicketArray] = useState([]);

  function fillTicket(newTicket) {
    // ticketArray.push(newTicket);
    setTicketArray((prevTickets) => [...prevTickets, newTicket]);
    // console.log("ticketArray: ", ticketArray);
    console.log(`pushed ${newTicket}`);
    console.log("ticketArray: ", ticketArray);
  }

  function pushToParentTicket() {
    parentTicket.groupedTickets.push(...ticketArray);
    // parentTicket.index[0].amount = ticketAmount;
    //^Push ticketAmount til amount i parent ticket objektet med generel info
    console.log("pushed ticketArray to parentTicket: ", parentTicket);

    // parentTicket.groupedTickets.forEach(group => {
    //   group.forEach(ticket => {if (ticket.isVip==="true")})
    // })

    setProcess(`BillingInfo`);
  }

  const [showTicket, setShowTicket] = useState(0);

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 h-full">
      <div className=" md:col-start-2 md:col-span-2 my-auto">
        <h3 className="p-2 bg-white-off-00 text-dark-grey-00 mb-2">
          please fill out your {ticketAmount} tickets
        </h3>
        <div>
          {Array.from({ length: ticketAmount }, (_, index) => (
            <div
              key={index}
              className={showTicket === index ? styles.show : styles.hide}
            >
              <SingleTicket
                fillTicket={fillTicket}
                isLast={index === ticketAmount - 1}
                ticketNr={index}
                ticketAmount={ticketAmount}
                pushToParentTicket={pushToParentTicket}
                setTotalGreen={setTotalGreen}
                totalGreen={totalGreen}
                totalVip={totalVip}
                setTotalVip={setTotalVip}
                showTicket={showTicket}
                setShowTicket={setShowTicket}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
