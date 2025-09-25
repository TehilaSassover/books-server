const express = require('express');
const router = express.Router();
const { getBooks, getBook, createBook, editBook, removeBook } = require('../controllers/booksController');

// GET all books
router.get('/', getBooks);

// GET book by id
router.get('/:id', getBook);

// POST new book
router.post('/', createBook);

// PATCH edit book by id
router.patch('/:id', editBook);

// DELETE book by id
router.delete('/:id', removeBook);

module.exports = router;
