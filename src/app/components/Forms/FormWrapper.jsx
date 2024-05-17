"use client";

import React from "react";
import { useState } from "react";
// import Progression from "../components/Forms/Progression";
import SelectAmount from "./SelectAmount";
// import Timer from "../components/Forms/Timer";
import FillTicket from "./FillTicket";
import BillingInfo from "./BillingInfo";
// import Summary from "../components/Forms/Summary";

export default function FormWrapper({ areas }) {
  const [ticketAmount, setTicketAmount] = useState(1);

  let parentTicket = [
    {
      amount: 1,
      area: "Nilfheim",
      tents: 1,
    },
    {
      name: null,
      ticket: null,
      greenCamping: null,
    },
  ];

  //array af enkelt billet objekter --- array med mængde af tickets, area tents og andre ting der ændre prisen

  function parentSubmitHandler() {}

  function parentSubmit() {}

  return (
    <section className="md:max-w-7xl mx-auto">
      <p>Number of tickets: {ticketAmount}</p>
      <SelectAmount
        areas={areas}
        ticketAmount={ticketAmount}
        setTicketAmount={setTicketAmount}
      />
      <FillTicket ticketAmount={ticketAmount} />
      <BillingInfo />
      {/* <Summary /> */}
    </section>
  );
}
