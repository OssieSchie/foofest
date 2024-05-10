import React from "react";
import { getAllBands } from "@/app/lib/api";
import Image from "next/image";
import Link from "next/link";

export default async function BandCards() {
  const data = await getAllBands();
  //   console.log(data);

  return (
    <article className="grid sm:grid-cols-1 md:grid-cols-4 gap-2 md:mx-12 mx-0">
      {data.slice(0, 16).map((bands) => (
        <div
          key={bands.slug}
          className="relative transition-transform duration-300 ease-in-out transform hover:scale-95"
        >
          <Link href={`/${bands.slug}`} prefetch={false}>
            <h4 className="absolute bottom-0 left-0 w-full bg-black bg-opacity-25 text-white text-center p-2">
              {bands.name}
            </h4>
            <Image
              src={`/logos/${bands.logo}`}
              width={250}
              height={250}
              alt="Logo For the Band"
              priority={true}
              className="h-full w-full object-cover"
            />
          </Link>
        </div>
      ))}
      {data.slice(16).map((bands) => (
        <div
          key={bands.slug}
          className="relative transition-transform duration-300 ease-in-out transform hover:scale-95"
        >
          <Link href={`/${bands.slug}`} prefetch={false}>
            <h4 className="absolute bottom-0 left-0 w-full bg-black bg-opacity-25 text-white text-center p-2">
              {bands.name}
            </h4>
            <Image
              src={bands.logo}
              width={500}
              height={500}
              alt="Logo For the Band"
              priority={true}
              className="h-full w-full object-cover"
            />
          </Link>
        </div>
      ))}
    </article>
  );
}
