import { type BookReference } from "../types/bookType";

export const getBooksAsync = async (query: string): Promise<BookReference[]> => {
    const params = new URLSearchParams({ q: query });
    const response = await fetch(`https://openlibrary.org/search.json?${params.toString()}`);

    if (!response.ok) {
        throw new Error("Error en la ejecución de la API");
    }

    const booksData: { docs: BookReference[] } = await response.json();
    return booksData.docs;
};