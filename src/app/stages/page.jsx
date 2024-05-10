import React from "react";
import { getAllSchedule } from "@/app/lib/api";
import Stages from "../components/Stages";

export default async function stages() {
  const data = await getAllSchedule();
  // console.table(data);

  const Midgard = data.Midgard;
  const Vanaheim = data.Vanaheim;
  const Jotunheim = data.Jotunheim;

  console.log(Midgard);

  const text = data.toString();

  return (
    <main>
      <h1>Stages</h1>

      <Stages name="Midgard" />
      {/* <div>
        <Stages data={Midgard}/>
        <Stages data={Vanaheim}/>
        <Stages data={data.Jotunheim}/>
      </div> */}
    </main>
  );
}
