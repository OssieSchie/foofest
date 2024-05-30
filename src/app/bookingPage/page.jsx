import React from "react";
import { getAllAvailableSpots } from "../lib/api";
import SelectAmount from "../components/Forms/SelectAmount";
import FormWrapper from "../components/Forms/FormWrapper";

export default async function page() {
  const data = await getAllAvailableSpots();

  // console.log(data);
  return (
    <main className="h-[calc(100svh-8rem)]">
      <section className="h-full">
        <FormWrapper areas={data} />
      </section>
    </main>
  );
}
