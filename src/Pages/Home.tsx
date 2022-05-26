import { Header } from "../Components/Header";
import { Main } from "../Components/Main";
import { Footer } from "../Components/Footer";
import React, { useState } from "react";

export function Home({ addToFav, fetchData }) {
  const [valueInput, setSearch] = useState("");
  const [valuehSelect, setSearchSelect] = useState("");
  const [currentPage, setCurrentPages] = useState(1);
  const [cardsPerPage, setNumberOfCards] = useState(4);

  const filtered = fetchData.filter((item: any) => {
    return (
      item.name.toLowerCase().includes(valueInput.toLowerCase()) &&
      item.house.toLowerCase().includes(valuehSelect.toLowerCase())
    );
  });

  const searchValue = (event: any) => setSearch(event.target.value);
  const searchValueSelect = (event: any) => setSearchSelect(event.target.value);
  const buttonCurrentPages = (pageNumber: number) =>
    setCurrentPages(pageNumber);
  const numberOfCardsSelect = (event: any) =>
    setNumberOfCards(event.target.value);

  const lastCardIndex = currentPage * cardsPerPage;
  const firstCardIndex = lastCardIndex - cardsPerPage;
  const currentCard = filtered.slice(firstCardIndex, lastCardIndex);

  let startPage = 0;
  let endPage = 3;
  return (
    <>
      <Header />
      <Main
        search={searchValue}
        searchSelect={searchValueSelect}
        base={currentCard}
        addToFav={addToFav}
      />
      <Footer
        startPage={startPage}
        endPage={endPage}
        currentCard={currentCard}
        cardsPerPage={cardsPerPage}
        base={filtered.length}
        buttonCurrentPages={buttonCurrentPages}
        numberOfCardsSelect={numberOfCardsSelect}
      />
    </>
  );
}
