import { deleteBook } from "../../services/book";

const BookCard = ({ book, onDelete }) => {
  const handleDelete = async () => {
    await deleteBook(book.id);
    await onDelete();
  };

  return (
    <div className="rounded-md p-3 flex justify-between items-start bg-purple-100">
      <div className="flex flex-col gap-2">
        <h3 className="text-xl font-semibold text-purple-700">{book.title}</h3>
        <h5 className="text-purple-900">{book.description}</h5>
      </div>
      <div className="flex flex-col gap-1">
        <a
          className="py-1 px-2 bg-purple-50 text-purple-700 text-sm rounded-md text-center"
          href={`/book/${book.id}/edit`}
        >
          Edit
        </a>
        <button
          className="py-1 px-2 bg-red-50 text-red-700 text-sm rounded-md"
          onClick={handleDelete}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default BookCard;
