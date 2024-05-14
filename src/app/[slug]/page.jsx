import { getBandsBySlug, getFlatSchedule } from "@/app/lib/api";
import React from "react";
import Image from "next/image";

async function bandPage({ params }) {
  const { slug } = params;
  const data = await getBandsBySlug(slug);

  const scheduleData = await getFlatSchedule();

  const filteredData = scheduleData.filter((item) => item.act === data.name);

  function replaceDayAbbreviations(dayAbbreviation) {
    const dayArr = {
      mon: "Monday",
      tue: "Tuesday",
      wed: "Wednesday",
      thu: "Thursday",
      fri: "Friday",
      sat: "Saturday",
      sun: "Sunday",
    };

    return dayArr[dayAbbreviation] || dayAbbreviation;
  }

  // console.log(filteredData);
  // console.log(scheduleData);

  return (
    <div>
      <h1>Bands navn: {data.name}</h1>
      <h3>Genre: {data.genre}</h3>
      {data.logo.startsWith("http") ? ( // Check if image URL is an external link
        <Image
          src={data.logo}
          width={500}
          height={500}
          alt="Logo For the Band"
          priority={true}
        />
      ) : (
        <Image
          src={`/logos/${data.logo}`}
          width={500}
          height={500}
          alt="Logo For the Band"
          priority={true}
        /> // Image stored in public folder
      )}
      <h3>Playing at:</h3>
      {filteredData.map((item, index) => (
        <div key={index}>
          <p>{item.stage}</p>
          <h3>Time: </h3>
          <p>{replaceDayAbbreviations(item.day)}</p>
          <p>
            {item.start} - {item.end}
          </p>
        </div>
      ))}
    </div>
  );
}

export default bandPage;
