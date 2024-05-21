"use client";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { addFavorited, deleteFavorited, getAllfavorited } from "@/app/lib/api";

// Styled-components for dynamic styling and scoped CSS
const Container = styled.div`
  position: fixed;
  right: ${(props) => (props.isVisible ? "0" : "-100%")};
  top: 0;
  width: 300px;
  height: 100%;
  background-color: white;
  transition: right 0.3s ease-in-out;
  box-shadow: ${(props) =>
    props.isVisible ? "-2px 0 5px rgba(0,0,0,0.3)" : "none"};
`;

const ToggleButton = styled.button`
  position: fixed;
  top: 20px;
  right: ${(props) => (props.isVisible ? "320px" : "20px")};
  transition: right 0.3s ease-in-out;
`;

export default function FavoriteTab({ band, name, schedule }) {
  const [favoriteActs, setFavoriteActs] = useState(name);
  const [isVisible, setIsVisible] = useState(false);

  const fetchFavorites = async () => {
    const initialFavorites = await getAllfavorited();
    setFavoriteActs(initialFavorites);
  };

  // Call fetchFavorites once when the component is loaded
  fetchFavorites();

  const favorited = async (act) => {
    // add the band to favorites
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

  // Function to toggle the visibility of the container
  const toggleContainer = () => {
    setIsVisible(!isVisible);
  };

  return (
    <>
      <ToggleButton isVisible={isVisible} onClick={toggleContainer}>
        {isVisible ? "Hide Favorites" : "Show Favorites"}
      </ToggleButton>
      <Container isVisible={isVisible}>
        {band.map((band) => (
          <div key={band.id}>
            <button onClick={() => favorited(band.act)}>
              Add {band.act} to favorites
            </button>
          </div>
        ))}
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
      </Container>
    </>
  );
}
