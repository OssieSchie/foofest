"use client";
import styles from "./FormWrapper.module.css";
import React from "react";
import { useState } from "react";
// import Progression from "../components/Forms/Progression";
import SelectAmount from "./SelectAmount";
import Timer from "./Timer";
import FillTicket from "./FillTicket";
import BillingInfo from "./BillingInfo";
import { completeReservation, postParentTicket } from "@/app/lib/api";
import Summary from "./Summary";
import FinPurchase from "../FinPurchase";
import NoTime from "./NoTime";

export default function FormWrapper({ areas }) {
  const [ticketID, setTicketID] = useState(null);
  const [ticketAmount, setTicketAmount] = useState(1);
  const [area, setArea] = useState("");
  const [tents, setTents] = useState(0);
  // const [process, setProcess] = useState(`NoTime`);
  const [process, setProcess] = useState(`SelectAmount`);

  const [showTimer, setShowTimer] = useState(0);

  // let parentTicket = {
  //   ticketID: ticketID,
  //   amount: ticketAmount,
  //   area: area,
  //   tents: tents,
  //   groupedTickets: [],
  // };
  // ^^omskriv så individuelle tickets er nemmere at tilgå

  const [parentTicket, setParentTicket] = useState({
    ticketID: ticketID,
    amount: ticketAmount,
    area: area,
    tents: tents,
    groupedTickets: [],
  });

  const [totalVip, setTotalVip] = useState(0);
  const [totalGreen, setTotalGreen] = useState(0);

  function finalizePurchase() {
    completeReservation(ticketID);
    console.log(`completed reservation for ${ticketID}`);
    const parent = postParentTicket(parentTicket);
    console.log(`posted parent to Supabase:
    ${parent}`);

    setProcess(`FinPurchase`);
    setShowTimer(0);
  }

  return (
    <section className="h-full">
      {/* <p>{process}</p> */}
      <section className="flex flex-col mx-5 md:grid md:grid-cols-5 h-full">
        {/* <div>
        <p>id = {ticketID}</p>
        <p>Number of tickets: {ticketAmount}</p>
        <p>{area}</p>
        <p>tents = {tents}</p>
      </div> */}

        <section
          className={`md:col-start-2 md:col-span-3 order-last md:order-first h-full`}
        >
          <div
            className={process === `SelectAmount` ? styles.show : styles.hide}
          >
            <SelectAmount
              areas={areas}
              ticketAmount={ticketAmount}
              setTicketAmount={setTicketAmount}
              // setTicketID={setTicketID}
              // setArea={setArea}
              // setTents={setTents}
              setProcess={setProcess}
              setParentTicket={setParentTicket}
              setShowTimer={setShowTimer}
            />
          </div>

          <div className={process === `FillTicket` ? styles.show : styles.hide}>
            <FillTicket
              ticketAmount={ticketAmount}
              // parentTicket={parentTicket}
              setParentTicket={setParentTicket}
              setTotalGreen={setTotalGreen}
              totalGreen={totalGreen}
              setTotalVip={setTotalVip}
              totalVip={totalVip}
              setProcess={setProcess}
            />
          </div>

          <div
            className={process === `BillingInfo` ? styles.show : styles.hide}
          >
            <BillingInfo
              finalizePurchase={finalizePurchase}
              setProcess={setProcess}
            />
          </div>
          <div
            className={process === `FinPurchase` ? styles.show : styles.hide}
          >
            <FinPurchase />
          </div>
          <div className={process === `NoTime` ? styles.show : styles.hide}>
            <NoTime />
          </div>
        </section>
        <div className="flex flex-row md:flex-col">
          <div
            className={
              process === `FinPurchase` || process === `NoTime`
                ? styles.hide
                : styles.show
            }
          >
            {showTimer === 1 && (
              <div>
                <Timer
                  showTimer={showTimer}
                  ticketAmount={ticketAmount}
                  setProcess={setProcess}
                />
              </div>
            )}
            <Summary
              ticketID={ticketID}
              ticketAmount={ticketAmount}
              tents={tents}
              totalGreen={totalGreen}
              totalVip={totalVip}
            />
          </div>
        </div>
      </section>
    </section>
  );
}
