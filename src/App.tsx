import "./App.css";

import { Routes, Route, Link } from "react-router-dom";
import { CardFav } from "./Pages/TestPage";
import { Home } from "./Pages/Home";
import { useState, useEffect } from "react";

export type Func = {
  addToFav: (event: any) => void;
};
export type Wizard = {
  name: string;
  alternate_names: Array<any>;
  species: string;
  gender: string;
  house: string;
  dateOfBirth: string;
  yearOfBirth: number;
  id: number;
  wizard: boolean;
  ancestry: string;
  eyeColour: string;
  hairColour: string;
  wand: {
    wood: string;
    core: string;
    length: number;
  };
  patronus: string;
  hogwartsStudent: boolean;
  hogwartsStaff: boolean;
  actor: string;
  alternate_actors: Array<any>;
  alive: boolean;
  image: string;
};
type wandObj = {
  core: String;
};
type PropTypes = {
  name: string;
  actor: string;
  house: string;
  wand: wandObj;
  image: string;
  alive: boolean;
  gender: string;
  id: number;
  addToFav: (id: any) => void;
};

export function App() {
  const [fetchData, setFetchData] = useState<Wizard[]>([]);
  const [favorites, setFavorites] = useState<Wizard[]>([]);
  const [deleteFavorites, setDeleteFavorites] = useState<Wizard[]>([]);

  useEffect(() => {
    fetch("http://hp-api.herokuapp.com/api/characters")
      .then((res) => res.json())
      .then((data) => setFetchData(data));
  }, []);
  console.log(fetchData);

  const addToFav = (name: string) => {
    const likedItem: any = fetchData.find((item: any) => item.name === name);
    if (favorites.includes(likedItem)) return;
    setFavorites([...favorites, likedItem]);
  };

  const deleteFav = (name: string) => {
    const unlikedItem: any = favorites.filter((item) => item.name !== name);
    setFavorites(unlikedItem);
  };

  return (
    <>
      <div className="link-container">
        <div className="link-flex">
          <Link className="link-btn" to="/">
            Home
          </Link>
          <Link className="link-btn" to="/favorites">
            Favorites
          </Link>
        </div>
      </div>
      <Routes>
        <Route
          path="/"
          element={<Home addToFav={addToFav} fetchData={fetchData} />}
        ></Route>
        <Route
          path="/favorites"
          element={<CardFav favorites={favorites} deleteFav={deleteFav} />}
        />
      </Routes>
    </>
  );
}

export default App;
