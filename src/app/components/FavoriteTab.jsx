"use client";
import React, { useState, useEffect } from "react";
import { addFavorited, deleteFavorited, getAllfavorited } from "@/app/lib/api";

export default function FavoriteTab({ band, name, schedule }) {
  const [favoriteActs, setFavoriteActs] = useState(name);

  const act = band.map((band) => {
    return band.act;
  });

  const sch = schedule.map((s) => {
    return s.act;
  });

  const favorited = async () => {
    await addFavorited(act);
    console.log(`${act} was pushed`);

    // Fetch the updated list of favorites
    const updatedFavorites = await getAllfavorited();
    setFavoriteActs(updatedFavorites);
  };
  const handleDelete = async (id) => {
    // Delete the favorite with the given ID
    await deleteFavorited(id);
    console.log(`Favorite with ID ${id} was deleted`);

    // Fetch the updated list of favorites after deletion
    const updatedFavorites = await getAllfavorited();
    setFavoriteActs(updatedFavorites);
  };

  return (
    <div>
      <button onClick={favorited}>Add to favorite</button>
      <div>
        {favoriteActs.map((n) => {
          return (
            <ul key={n.act}>
              <li className="border-2 flex gap-2">
                {n.act}
                <button
                  className="font-bold text-lg"
                  onClick={() => handleDelete(n.id)}
                >
                  &times;
                </button>
              </li>
            </ul>
          );
        })}
      </div>
    </div>
  );
}
