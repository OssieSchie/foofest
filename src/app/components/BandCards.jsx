import React from "react";
import { getAllBands } from "@/app/lib/api";
import Image from "next/image";
import Link from "next/link";

export default async function BandCards() {
  const data = await getAllBands();
  //   console.log(data);

  return (
    <div className="grid grid-cols-3 gap-2">
      {data.slice(0, 16).map((bands) => (
        <Link
          key={bands.slug}
          href={`/${bands.slug}`}
          className="border-2"
          prefetch={false}
        >
          <h3> {bands.name}</h3>
          <Image
            src={`/logos/${bands.logo}`}
            width={250}
            height={250}
            alt="Logo For the Band"
            priority={true}
          />
        </Link>
      ))}
      {data.slice(16).map((bands) => (
        <Link
          key={bands.slug}
          href={`/${bands.slug}`}
          className="border-2"
          prefetch={false}
        >
          <h3> {bands.name}</h3>
          <Image
            src={bands.logo}
            width={250}
            height={250}
            alt="Logo For the Band"
            priority={true}
          />
        </Link>
      ))}
    </div>
  );
}
