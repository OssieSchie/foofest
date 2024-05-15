import React from "react";
// import Progression from "../components/Forms/Progression";
import SelectAmount from "./SelectAmount";
// import Timer from "../components/Forms/Timer";
// import FillTicket from "../components/Forms/FillTicket";
// import BillingInfo from "../components/Forms/BillingInfo";
// import Summary from "../components/Forms/Summary";

export default function FormWrapper({ data }) {
  return (
    <section className="md:max-w-7xl mx-auto">
      <SelectAmount areas={data} />
      {/* <FillTicket />
    <BillingInfo />
    <Summary /> */}
    </section>
  );
}
