import "../styles/SearchBar.css";

type SearchBarProps = {
  onSearch: (query: string) => void;
};

function SearchBar({ onSearch }: SearchBarProps) {
  const guardarBusqueda = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const busqueda = formData.get("q")?.toString().trim() ?? "";

    if (busqueda) {
      onSearch(busqueda);
      event.currentTarget.reset();
    }
  };

  return (
    <form className="search-bar" action="#" onSubmit={guardarBusqueda}>
      <label className="search-bar__label" htmlFor="book-query">
        Buscar libros
      </label>
      <div className="search-bar__row">
        <input
          id="book-query"
          className="search-bar__input"
          type="search"
          name="q"
          placeholder="Escribe el título de un libro"
        />
        <button className="search-bar__button" type="submit">
          Buscar
        </button>
      </div>
    </form>
  );
}

export default SearchBar;
