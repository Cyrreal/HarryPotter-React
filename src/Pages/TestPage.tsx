import { Card } from "../Components/Card";
import { CardDelete } from "../Components/CardFav";

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

export function CardFav({ favorites, deleteFav }: any) {
  // const { name, actor, house, wand, image, alive, gender, id, addToFav } =
  //   favorites;
  return (
    <>
      <div className="container">
        <h2 className="favorites-title">Liked Ones</h2>
        <p className="favorites-description">
          Your favorite characters from the Harry Potter universe.
        </p>
      </div>
      <hr className="line"></hr>
      <div className="container">
        <div className="card-grid">
          {favorites.map((elem, index) => (
            <CardDelete {...elem} key={index} deleteFav={deleteFav} />
          ))}
        </div>
      </div>
    </>
  );
}
