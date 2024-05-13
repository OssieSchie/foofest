import React from "react";
import Stages from "../components/Stages";
import { getAllSchedule } from "../lib/api";

export default async function stages() {
  const data = await getAllSchedule();

  // console.log(data);

  const Midgard = data.Midgard;

  // console.log(data.Midgard);

  return (
    <main>
      <h1>Stages</h1>

      <Stages name={"Midgard"} {...Midgard} />
      {/* <Stages name={"Midgard"} {...Midgard} /> */}
    </main>
  );
}
