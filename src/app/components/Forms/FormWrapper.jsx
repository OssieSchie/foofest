"use client";

import React from "react";
import { useState } from "react";
// import Progression from "../components/Forms/Progression";
import SelectAmount from "./SelectAmount";
// import Timer from "../components/Forms/Timer";
import FillTicket from "./FillTicket";
import BillingInfo from "./BillingInfo";
import { completeReservation, postParentTicket } from "@/app/lib/api";
// import Summary from "../components/Forms/Summary";

export default function FormWrapper({ areas }) {
  const [ticketID, setTicketID] = useState(null);
  const [ticketAmount, setTicketAmount] = useState(1);
  const [area, setArea] = useState("");
  const [tents, setTents] = useState(0);

  let parentTicket = {
    ticketID: ticketID,
    amount: ticketAmount,
    area: area,
    tents: tents,
    groupedTickets: [],
  };
  // ^^omskriv så individuelle tickets er nemmere at tilgå

  function finalizePurchase() {
    completeReservation(ticketID);
    console.log(`completed reservation for ${ticketID}`);
    const parent = postParentTicket(parentTicket);
    console.log(`posted parent to Supabase:
    ${parent}`);
  }

  return (
    <section className="md:max-w-7xl mx-auto">
      <p>id = {ticketID}</p>
      <p>Number of tickets: {ticketAmount}</p>
      <p>{area}</p>
      <p>tents = {tents}</p>
      <SelectAmount
        areas={areas}
        ticketAmount={ticketAmount}
        setTicketAmount={setTicketAmount}
        setTicketID={setTicketID}
        setArea={setArea}
        setTents={setTents}
      />
      <FillTicket ticketAmount={ticketAmount} parentTicket={parentTicket} />
      <BillingInfo finalizePurchase={finalizePurchase} />
      {/* <Summary /> */}
    </section>
  );
}
