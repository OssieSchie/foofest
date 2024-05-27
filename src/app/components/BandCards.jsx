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
  const [searchQuery, setSearchQuery] = useState("");
  const [visibleBands, setVisibleBands] = useState(12);

  const data = props.data;
  const uniqueGenresArray = [];

  //filtrere gennem alle objekter og laver værdien af den genre man kigger på til den current selected genre.
  const filteredData = data.filter((band) => {
    const matchesGenre = selectedGenre ? band.genre === selectedGenre : true;
    const matchesSearch = band.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesGenre && matchesSearch;
  });

  const handleGenreClick = (genre) => {
    setSelectedGenre(genre);
    setVisibleBands(12); // Reset the number of visible bands when a new genre is selected
  };

  const handleShowAll = () => {
    setSelectedGenre(null);
    setVisibleBands(12); // Reset the number of visible bands when showing all bands
  };

  const loadMoreBands = () => {
    setVisibleBands((prevVisibleBands) => prevVisibleBands + 10);
  };

  const expand = () => {
    setExpanded((expand) => !expand);
  };

  // kører gennem alle genrene og tilføjer hver genrer til ny array
  data.map((bands) => {
    if (!uniqueGenresArray.includes(bands.genre)) {
      uniqueGenresArray.push(bands.genre);
    }
  });

  //   console.log(uniqueGenresArray);
  return (
    <section className="flex flex-col gap-5">
      <div className="flex flex-col items-center sm:flex-row sm:justify-center gap-4 sm:gap-8 md:gap-12 lg:gap-16">
        <input
          type="text"
          placeholder="Search for a band"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-accent-00 text-black"
        />
        <button
          onClick={expand}
          className="bg-accent-00 text-white-off-00 hover:bg-red-700 hover:border-red-700 focus:outline-none focus:ring-2 rounded-lg py-2 px-4 transition-colors duration-300"
        >
          Choose a genre to view
        </button>
      </div>

      <article
        className={`${
          expanded ? styles.open : styles.closed
        } grid sm:grid-cols-1 md:grid-cols-3 gap-2 md:mx-24 mx-1`}
      >
        {uniqueGenresArray.map((g, index) => (
          <button
            key={index}
            onClick={() => handleGenreClick(g)}
            className="bg-gray-800 text-white border-2 border-gray-800 hover:bg-gray-700 hover:border-gray-700 focus:outline-none focus:ring-2 focus:ring-accent-00 rounded-lg py-2 px-4 transition-colors duration-300"
          >
            {g}
          </button>
        ))}
        <button
          onClick={handleShowAll}
          className="bg-accent-00 text-white border-2 border-accent-00 hover:bg-red-700 hover:border-red-700 focus:outline-none focus:ring-2 focus:ring-red-700 rounded-lg py-2 px-4 transition-colors duration-300"
        >
          Show All
        </button>
      </article>

      {filteredData.length === 0 && (
        <h4 className="text-center text-black-600 mt-4">
          No matching bands found.
        </h4>
      )}

      <article className="grid sm:grid-cols-1 md:grid-cols-4 gap-2 md:mx-24 mx-1">
        {filteredData.slice(0, visibleBands).map((bands) => (
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

      {filteredData.length > visibleBands && (
        <div className="flex justify-center mt-4">
          <button
            onClick={loadMoreBands}
            className="bg-accent-00 text-white border-2 border-accent-00 hover:bg-red-700 hover:border-red-700 focus:outline-none focus:ring-2 focus:ring-red-700 rounded-lg py-2 px-4 transition-colors duration-300"
          >
            See More
          </button>
        </div>
      )}
    </section>
  );
}
