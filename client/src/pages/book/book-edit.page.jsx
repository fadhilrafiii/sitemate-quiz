import { useCallback, useEffect, useState } from "react";
import BookForm from "../../components/book-form/book-form.component";
import { getBookDetail } from "../../services/book";
import { useLocation } from "react-router-dom";

const BookEdit = () => {
  const { pathname } = useLocation();
  const bookId = pathname.split('/')[2];

  const [isLoading, setLoading] = useState(false);
  const [book, setBook] = useState(null);

  const fetchBook = useCallback(async () => {
    setLoading(true);
    const fetchedBook = await getBookDetail(bookId)
    setBook(fetchedBook);
    setLoading(false);
  }, [bookId])

  useEffect(() => {
    fetchBook();
  }, [fetchBook])

  if (isLoading) return <div>Loading...</div>
  if (!book) return <div>Book not found!</div>

  return (
    <div>
      <h1 className="font-semibold text-3xl mb-4">Book Edit</h1>
      <BookForm initialData={book} />
    </div>
  );
};

export default BookEdit;
