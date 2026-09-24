import "../styles/SearchHistory.css";

type SearchHistoryProps = {
  searches: string[];
};

function SearchHistory({ searches }: SearchHistoryProps) {
  return (
    <section className="search-history" aria-label="Búsquedas realizadas">
      <h2 className="search-history__title">Búsquedas recientes</h2>
      <ul className="search-history__list">
        {searches.map((search, index) => (
          <li key={search}>
            <button className={`search-chip${index === 0 ? " search-chip--active" : ""}`} type="button">
              {search}
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default SearchHistory;
