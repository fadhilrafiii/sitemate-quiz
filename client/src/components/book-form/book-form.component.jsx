import { useState } from "react";
import { createBook, updateBook } from "../../services/book";
import { useNavigate } from "react-router-dom";

const BookForm = ({ initialData }) => {
  const navigate = useNavigate();
  const [form, setForm] = useState(
    initialData || {
      title: "",
      description: "",
    }
  );

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!initialData) await createBook(form);
    else await updateBook(initialData.id, form);

    navigate("/book");
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="flex flex-col gap-1 font-medium text-lg">
        <label className="text-gray-700">Title</label>
        <input
          placeholder="Enter book title..."
          className="outline-none border !border-purple-800 rounded-md !h-10 text-purple-900 py-2 px-3"
          name="title"
          value={form.title}
          onChange={handleChange}
        />
      </div>
      <div className="flex flex-col gap-1 font-medium text-lg">
        <label className="text-gray-700">Description</label>
        <input
          placeholder="Enter book description..."
          className="outline-none border border-purple-800 rounded-md h-10 text-purple-900 py-2 px-3"
          name="description"
          value={form.description}
          onChange={handleChange}
        />
      </div>
      <button
        type="submit"
        className="bg-purple-700 text-white py-2 px-3 rounded-md ml-auto"
      >
        Submit
      </button>
    </form>
  );
};

export default BookForm;
