import Image from "next/image";
import { completeReservation, getAllBands, reserveSpot } from "@/app/lib/api";
import BandCards from "./components/BandCards";
import FrontPageIntroCard from "./components/FrontPageIntroCard";
import Footer from "./components/Footer";

export default async function Home() {
  // const data = await getAllBands();
  // console.log(data);

  //Api Testing Functions and CLG
  // const data2 = await reserveSpot("Helheim", 1);
  // console.log(data2);
  // const data3 = await completeReservation(data2.id);
  // console.log(data3);

  const data = await getAllBands();

  return (
    <main className="mx-5 md:mx-20 contents">
      <FrontPageIntroCard></FrontPageIntroCard>
      <BandCards data={data}></BandCards>
      <Footer />
    </main>
  );
}
