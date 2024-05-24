"use client";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { addFavorited, deleteFavorited, getAllfavorited } from "@/app/lib/api";

// Styled-components for dynamic styling and scoped CSS
const Container = styled.div`
  position: fixed;
  right: ${(props) => (props.isVisible ? "0" : "-100%")};
  top: 1.25rem;
  width: 18.75rem;
  height: 50%;
  background-color: white;
  transition: right 0.5s ease-in-out;
  box-shadow: ${(props) =>
    props.isVisible ? "-2px 0 5px rgba(0,0,0,0.3)" : "none"};
  text-align: center;
  background-color: rgba(38, 35, 35, 0.5);
`;

const ToggleButton = styled.button`
  position: fixed;
  top: 1.25rem;
  right: ${(props) => (props.isVisible ? "19rem" : "20px")};
  transition: right 0.5s ease-in-out;
  padding: 0.5rem 1rem;
  background-color: #bf6d32;
  color: white;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);

  &:hover {
    background-color: #975627;
  }

  &:active {
    background-color: #975627;
    box-shadow: inset 0 2px 5px rgba(0, 0, 0, 0.2);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px #975627;
  }
`;

export default function FavoriteTab({ band, name, schedule }) {
  const [favoriteActs, setFavoriteActs] = useState(name);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const fetchFavorites = async () => {
      const initialFavorites = await getAllfavorited();
      setFavoriteActs(initialFavorites);
    };

    // Call fetchFavorites once when the component is mounted
    fetchFavorites();
  }, []);

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
    <article>
      <ToggleButton isVisible={isVisible} onClick={toggleContainer}>
        {isVisible ? "×" : "Favorites"}
      </ToggleButton>
      <Container isVisible={isVisible}>
        {band.map((band) => (
          <div key={band.id} className="m-2">
            <button onClick={() => favorited(band.act)} className="">
              Add {band.act} to favorites
            </button>
          </div>
        ))}
        <div className="flex flex-col">
          {favoriteActs.map((n) => {
            return (
              <ul key={n.id} className="">
                <li className="border-b-2 p-2 flex gap-2 items-center justify-center">
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
    </article>
  );
}
