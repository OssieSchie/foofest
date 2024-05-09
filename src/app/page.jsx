import Image from "next/image";
import { completeReservation, getAllBands, reserveSpot } from "@/app/lib/api";
import BandCards from "./components/BandCards";

export default async function Home() {
  // const data = await getAllBands();
  // console.log(data);

  //Api Testing Functions and CLG
  // const data2 = await reserveSpot("Helheim", 1);
  // console.log(data2);
  // const data3 = await completeReservation(data2.id);
  // console.log(data3);

  return (
    <main>
      <article>
        <BandCards></BandCards>
      </article>
    </main>
  );
}
