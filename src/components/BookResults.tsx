import "../styles/BookResults.css";
import { type BookReference } from "../types/bookType";

type BookResultsProps = {
  books: BookReference[];
  hasError: boolean;
  query: string;
};

function BookResults({ books, hasError, query }: BookResultsProps) {
  return (
    <section className="book-results" aria-label="Resultados de libros">
      <div className="book-results__header">
        <h2 className="book-results__title">Resultados</h2>
        <p className="book-results__count">
          {`${books.length} libros${query ? ` para “${query}”` : ""}`}
        </p>
      </div>
      {hasError && <p>No se pudieron cargar los libros. Intenta de nuevo.</p>}
      <ul className="book-results__grid">
        {books.map((book) => (
          <li key={book.key}>
            <article className="book-card">
              {book.cover_i ? (
                <img
                  className="book-card__cover"
                  src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
                  alt={`Portada de ${book.title}`}
                />
              ) : (
                <div className="book-card__cover book-card__cover--empty" aria-hidden="true">
                  Sin portada
                </div>
              )}
              <div className="book-card__body">
                <h3 className="book-card__title">{book.title}</h3>
                <p className="book-card__author">{book.author_name?.[0] ?? "Autor desconocido"}</p>
                <p className="book-card__meta">
                  {book.first_publish_year ?? "Año desconocido"} · {book.edition_count ?? 0} ediciones
                </p>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default BookResults;
