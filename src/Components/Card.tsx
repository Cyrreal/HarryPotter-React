type wandObj = {
  core: String;
};
type propTypes = {
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

export function Card({
  name,
  actor,
  house,
  wand,
  image,
  alive,
  gender,
  id,
  addToFav,
}: propTypes) {
  return (
    <div className="card-content_flex">
      <div className="character-image" key={id}>
        <img src={image} alt="Character" />
      </div>
      <div className="character-description">
        <h2>{name}</h2>
        <p>Actor: {actor}</p>
        <p>Gender: {gender[0].toUpperCase() + gender.slice(1)}</p>
        <p>House: {house ? house : "No information"}</p>
        <p>
          Wand core:{" "}
          {wand.core
            ? wand.core[0].toUpperCase() + wand.core.slice(1)
            : "No information"}
        </p>
        <p>Alive: {alive === true ? "Yes" : "Dead"}</p>
      </div>
      <button className="favorite" onClick={() => addToFav(name)}>
        ❤️
      </button>
    </div>
  );
}
