export function Footer({
  buttonCurrentPages,
  numberOfCardsSelect,
  base,
  cardsPerPage,
  currentCard,
  startPage,
  endPage,
}) {
  const pageNumber: number[] = [];
  for (let i = 1; i <= Math.ceil(base / cardsPerPage); i++) {
    pageNumber.push(i);
  }

  const cardsOnPage = [4, 6, 8];
  return (
    <footer className="container">
      <div>
        {pageNumber.map((number, index) => {
          return (
            <button key={index} onClick={() => buttonCurrentPages(number)}>
              {number}
            </button>
          );
        })}
      </div>
      <div>
        <select onChange={numberOfCardsSelect}>
          {cardsOnPage.map((number, index) => {
            return (
              <option value={number} key={index}>
                {number}
              </option>
            );
          })}
        </select>
      </div>
    </footer>
  );
}
