import { useCallback, useEffect, useState } from "react";
import { getBooks } from "../../services/book";
import BookCard from "../../components/book-card/book-card.component";

const BookList = () => {
  const [books, setBooks] = useState([]);

  const fetchBooks = useCallback(async () => {
    const fetchedBooks = await getBooks();
    setBooks(fetchedBooks);
  }, []);

  useEffect(() => {
    fetchBooks();
  }, [fetchBooks]);

  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="font-semibold text-3xl mb-4">Book List</h1>
        <a href="/book/create" className="bg-purple-700 text-white py-2 px-3 rounded-md">Create</a>
      </div>
      <div className="flex flex-col gap-2">
        {books.map((book) => (
          <BookCard key={book.id} book={book} onDelete={fetchBooks} />
        ))}
      </div>
    </div>
  );
};

export default BookList;
