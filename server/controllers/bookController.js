import { BOOKS } from "../constants/data/book.js";

class BookController {
  async createBook(req, res, next) {
    try {
      const book = req.body;
      const lastBookId = BOOKS[BOOKS.length - 1].id;
      BOOKS.push({
        ...book,
        id: lastBookId + 1,
      });

      console.log(book);
      res.json(book);
    } catch (error) {
      next(error);
    }
  }

  async getBooks(_, res, next) {
    try {
      res.json(BOOKS);
    } catch (error) {
      next(error);
    }
  }

  async getBookDetail(req, res, next) {
    try {
      const { id: bookId } = req.params;
      const book = BOOKS.find((book) => book.id === parseInt(bookId));
      if (!book) throw new Error("Book not found!");

      res.json(book);
    } catch (error) {
      next(error);
    }
  }

  async updateBook(req, res, next) {
    try {
      const newBookPayload = req.body;
      const { id } = req.params;

      const idx = BOOKS.findIndex((book) => book.id === parseInt(id));
      if (idx > -1){
        BOOKS[idx] = newBookPayload;
      }

      console.log(newBookPayload);
      res.json(newBookPayload);
    } catch (error) {
      next(error);
    }
  }

  async deleteBook(req, res, next) {
    try {
      const { id: bookId } = req.params;
      const idx = BOOKS.findIndex((book) => book.id === parseInt(bookId));

      if (idx > -1) {
        BOOKS.splice(idx, 1);
      }
      console.log("Book ID to delete:", bookId);

      res.json({ id: bookId });
    } catch (error) {
      next(error);
    }
  }
}

export default BookController;
