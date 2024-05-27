import React from "react";
import Stages from "../components/Stages";
import { getAllSchedule } from "../lib/api";

export default async function stages() {
  const data = await getAllSchedule();

  // console.log(data);

  const Midgard = data.Midgard;
  const Vanaheim = data.Vanaheim;
  const Jotunheim = data.Jotunheim;

  // console.log(data.Midgard);

  return (
    <main className="max-h-svh overflow-scroll md:mx-24 m-1 flex flex-col items-center gap-14 mb-4">
      <h1>Stages</h1>

      <div className="flex flex-col gap-6">
        <Stages name={"Midgard"} {...Midgard} />
        <Stages name={"Vanaheim"} {...Vanaheim} />
        <Stages name={"Jotunheim"} {...Jotunheim} />
      </div>
    </main>
  );
}
