"use client";
import styles from "./FormWrapper.module.css";
import React from "react";
import { useState } from "react";
// import Progression from "../components/Forms/Progression";
import SelectAmount from "./SelectAmount";
// import Timer from "../components/Forms/Timer";
import FillTicket from "./FillTicket";
import BillingInfo from "./BillingInfo";
import { completeReservation, postParentTicket } from "@/app/lib/api";
import Summary from "./Summary";

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

  const [totalVip, setTotalVip] = useState(0);
  const [totalGreen, setTotalGreen] = useState(0);

  function finalizePurchase() {
    completeReservation(ticketID);
    console.log(`completed reservation for ${ticketID}`);
    const parent = postParentTicket(parentTicket);
    console.log(`posted parent to Supabase:
    ${parent}`);
  }

  return (
    <section className="flex flex-col mx-5 md:grid md:grid-cols-5">
      {/* <div>
        <p>id = {ticketID}</p>
        <p>Number of tickets: {ticketAmount}</p>
        <p>{area}</p>
        <p>tents = {tents}</p>
      </div> */}

      <section className="md:col-start-2 md:col-span-3 order-last md:order-first">
        <SelectAmount
          areas={areas}
          ticketAmount={ticketAmount}
          setTicketAmount={setTicketAmount}
          setTicketID={setTicketID}
          setArea={setArea}
          setTents={setTents}
        />
        <FillTicket
          ticketAmount={ticketAmount}
          parentTicket={parentTicket}
          setTotalGreen={setTotalGreen}
          totalGreen={totalGreen}
          setTotalVip={setTotalVip}
          totalVip={totalVip}
        />
        <BillingInfo finalizePurchase={finalizePurchase} />
      </section>
      <div>
        <Summary
          ticketID={ticketID}
          ticketAmount={ticketAmount}
          tents={tents}
          totalGreen={totalGreen}
          totalVip={totalVip}
        />
      </div>
    </section>
  );
}
