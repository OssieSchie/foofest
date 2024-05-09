import { getBandsBySlug } from "@/app/lib/api";
import React from "react";

async function bandPage({ params }) {
  const { slug } = params;

  const data = await getBandsBySlug(slug);

  console.log(data.name);

  return (
    <div>
      <h1>Bands navn: {data.slug}</h1>
    </div>
  );
}

export default bandPage;
