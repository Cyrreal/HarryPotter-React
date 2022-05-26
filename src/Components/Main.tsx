import { Search } from "./Search";
import { Card } from "./Card";

type MainTypes = {
  base: any;
  search: any;
  searchSelect: any;
  addToFav: (number: any) => void;
};
export function Main({ base, search, searchSelect, addToFav }: MainTypes) {
  return (
    <main>
      <div className="container">
        <Search search={search} searchSelect={searchSelect} />
      </div>
      <hr className="line"></hr>
      <div className="container">
        <div className="card-grid">
          {base.map((elem, index) => {
            return <Card {...elem} key={index} addToFav={addToFav} />;
          })}
        </div>
      </div>
    </main>
  );
}
