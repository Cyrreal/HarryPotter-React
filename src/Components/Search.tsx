export function Search({ search, searchSelect }) {
  return (
    <div className="search-flex">
      <div className="search-flex_name">
        <p>Name</p>
        <input
          className="search-input"
          type="text"
          placeholder="Hermione"
          onChange={search}
        ></input>
      </div>
      <div className="search-flex_school">
        <p>School</p>
        <select onChange={searchSelect} className="search-select">
          <option value="" selected>
            Choose school
          </option>
          <option value="Gryffindor">Gryffindor</option>
          <option value="Slytherin">Slytherin</option>
          <option value="Hufflepuff">Hufflepuff</option>
          <option value="Ravenclaw">Ravenclaw</option>
        </select>
      </div>
    </div>
  );
}
