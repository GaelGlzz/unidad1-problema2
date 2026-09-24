import { useState } from "react";
import { type BookReference } from "../types/bookType";
import { getBooksAsync } from "../services/BookService";

export const useBooks = () => {
    const [books, setBooks] = useState<BookReference[]>([]);
    const [hasError, setHasError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const searchBooks = async (query: string) => {
        setIsLoading(true);
        setHasError(false);

        try {
            const booksData = await getBooksAsync(query);
            setBooks(booksData);
        } catch (error) {
            console.error(error);
            setHasError(true);
            setBooks([]);
        } finally {
            setIsLoading(false);
        }
    };

    return { books, hasError, isLoading, searchBooks };
};