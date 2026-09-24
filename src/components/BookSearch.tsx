import "../styles/BookSearch.css";
import { useState } from "react";
import { useBooks } from "../hooks/useBooks";
import BookResults from "./BookResults";
import SearchBar from "./SearchBar";
import SearchHistory from "./SearchHistory";

function BookSearch() {
  const [recentSearches, setRecentSearches] = useState<string[]>([]);
  const { books, hasError, isLoading, searchBooks } = useBooks();

  const guardarBusqueda = async (query: string) => {
    setRecentSearches((searches) => [query, ...searches.filter((search) => search !== query)]);
    await searchBooks(query);
  };

  return (
    <main className="book-search">
      <header className="book-search__header">
        <p className="book-search__kicker">Open Library</p>
        <h1 className="book-search__title">Buscador de libros</h1>
        <p className="book-search__lead">
          Escribe un título, revisa los resultados en tarjetas y conserva cada búsqueda como un chip.
        </p>
      </header>
      <SearchBar onSearch={guardarBusqueda} />
      <SearchHistory searches={recentSearches} />
      <BookResults books={books} hasError={hasError} isLoading={isLoading} query={recentSearches[0] ?? ""} />
    </main>
  );
}

export default BookSearch;
