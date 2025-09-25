const { getAllBooks, getBookById, addBook, updateBook, deleteBook } = require('../models/booksModel');

function getBooks(req, res) {
  res.json(getAllBooks());
}

function getBook(req, res) {
  const book = getBookById(Number(req.params.id));
  if (!book) return res.status(404).json({ message: 'Book not found' });
  res.json(book);
}

function createBook(req, res) {
  const { id, title } = req.body;
  if (!id || !title) {
    return res.status(400).json({ message: 'ID and title are required' });
  }
  const newBook = addBook({ id, title });
  res.status(201).json(newBook);
}

function editBook(req, res) {
  const id = Number(req.params.id);
  const updatedBook = updateBook(id, req.body);
  if (!updatedBook) return res.status(404).json({ message: 'Book not found' });
  res.json(updatedBook);
}

function removeBook(req, res) {
  const id = Number(req.params.id);
  const success = deleteBook(id);
  if (!success) return res.status(404).json({ message: 'Book not found' });
  res.json({ message: 'Book deleted' });
}

module.exports = { getBooks, getBook, createBook, editBook, removeBook };