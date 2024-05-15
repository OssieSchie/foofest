import React from "react";
import { getAllAvailableSpots } from "../lib/api";
// import Progression from "../components/Forms/Progression";
import SelectAmount from "../components/Forms/SelectAmount";
// import Timer from "../components/Forms/Timer";
// import FillTicket from "../components/Forms/FillTicket";
// import BillingInfo from "../components/Forms/BillingInfo";
// import Summary from "../components/Forms/Summary";

export default async function page() {
  const data = await getAllAvailableSpots();

  // console.log(data);
  return (
    <main>
      <section className="md:max-w-7xl mx-auto">
        <SelectAmount areas={data} />
        {/* <FillTicket />
        <BillingInfo />
        <Summary /> */}
      </section>
      {/* <Timer />
      <Progression /> */}
    </main>
  );
}
