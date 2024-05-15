"use client";
import React from "react";
import { getAllBands } from "@/app/lib/api";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import styles from "./BandCards.module.css";

export default function BandCards(props) {
  const [selectedGenre, setSelectedGenre] = useState(null);
  const [expanded, setExpanded] = useState(false);

  const data = props.data;
  const uniqueGenresArray = [];

  //filtrere gennem alle objekter og laver værdien af den genre man kigger på til den current selected genre.
  const filteredData = selectedGenre
    ? data.filter((band) => band.genre === selectedGenre)
    : data;

  const handleGenreClick = (genre) => {
    setSelectedGenre(genre);
  };

  const handleShowAll = () => {
    setSelectedGenre(null);
  };

  const expand = () => {
    setExpanded((expand) => !expand);
  };

  // kører gennem alle genrene og tilføjer 1 af hver genrer til ny array
  data.map((bands) => {
    if (!uniqueGenresArray.includes(bands.genre)) {
      uniqueGenresArray.push(bands.genre);
    }
  });

  //   console.log(uniqueGenresArray);
  return (
    <section className="flex flex-col gap-5">
      <button onClick={expand} className="underline">
        Choose a genre to view
      </button>
      <article
        className={`${
          expanded ? styles.open : styles.closed
        } grid sm:grid-cols-1 md:grid-cols-3 gap-2 md:mx-24 mx-1`}
      >
        {uniqueGenresArray.map((g, index) => (
          <button
            key={index}
            className="border-2"
            onClick={() => handleGenreClick(g)}
          >
            {g}
          </button>
        ))}
        <button className="border-2" onClick={handleShowAll}>
          Show All
        </button>
      </article>

      <article className="grid sm:grid-cols-1 md:grid-cols-4 gap-2 md:mx-24 mx-1">
        {filteredData.map((bands) => (
          <div
            key={bands.slug}
            className="relative transition-transform duration-300 ease-in-out transform hover:scale-95"
          >
            <Link href={`/${bands.slug}`} prefetch={false}>
              <h4 className="absolute bottom-0 left-0 w-full bg-black bg-opacity-25 text-white text-center p-2">
                {bands.name}
              </h4>
              <Image
                src={
                  bands.logo.includes("http")
                    ? `${bands.logo}`
                    : `/logos/${bands.logo}`
                }
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
    </section>
  );
}
