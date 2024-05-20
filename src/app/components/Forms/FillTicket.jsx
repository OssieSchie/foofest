'use client'
import React from "react";
import { useState } from "react";
import SingleTicket from "./SingleTicket";

export default function FillTicket({ ticketAmount, parentTicket }) {
  // const [isFinal, setIsFinal] = useState(false)

  const ticketArray = []

  function fillTicket(newTicket){

    ticketArray.push(newTicket)
    console.log(ticketArray)

    // if(isFinal){
    //   parentTicket.push(ticketArray);
    //   setIsFinal(false);
    //   console.log("pushed ticketArray to parentTicket: ", parentTicket );
    // }
  }

    function pushToParentTicket(){
      parentTicket.push(ticketArray);
      // parentTicket.index[0].amount = ticketAmount;
      //^Push ticketAmount til amount i parent ticket objektet med generel info
      console.log("pushed ticketArray to parentTicket: ", parentTicket );
    }

  return (
    <div>
      <p>please fill out your {ticketAmount} tickets</p>
      <div className="flex flex-row gap-2 overflow-x-scroll mx-auto">
        {Array.from({ length: ticketAmount }, (_, index) => (
          <SingleTicket key={index} fillTicket={fillTicket} isLast={index === ticketAmount - 1} ticketNr={index} ticketAmount={ticketAmount} pushToParentTicket={pushToParentTicket}/>
        ))}
      </div>
    </div>
  );
}
