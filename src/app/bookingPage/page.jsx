"use client";
import React from "react";
import Progression from "../components/Forms/Progression";
import SelectAmount from "../components/Forms/SelectAmount";
import Timer from "../components/Forms/Timer";
import FillTicket from "../components/Forms/FillTicket";
import BillingInfo from "../components/Forms/BillingInfo";
import Summary from "../components/Forms/Summary";

export default function page() {
  return (
    <main>
      <section>
        <SelectAmount />
        {/* <FillTicket />
        <BillingInfo />
        <Summary /> */}
      </section>
      {/* <Timer />
      <Progression /> */}
    </main>
  );
}
