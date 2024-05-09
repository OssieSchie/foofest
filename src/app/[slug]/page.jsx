import { getBandsBySlug } from "@/app/lib/api";
import React from "react";

async function bandPage({ params }) {
  const { slug } = params;
  const data = await getBandsBySlug(slug);

  console.log(data);

  return (
    <div>
      <h1>Bands navn: {data.name}</h1>
      <h3>Genre: {data.genre}</h3>
    </div>
  );
}

export default bandPage;
