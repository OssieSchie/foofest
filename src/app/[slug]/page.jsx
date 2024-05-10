import { getBandsBySlug } from "@/app/lib/api";
import React from "react";
import Image from "next/image";

async function bandPage({ params }) {
  const { slug } = params;
  const data = await getBandsBySlug(slug);

  console.log(data);

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
    </div>
  );
}

export default bandPage;
