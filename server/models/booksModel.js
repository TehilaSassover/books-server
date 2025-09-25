let books = [
  { id: 1, title: 'Book One' },
  { id: 2, title: 'Book Two' }
];

// החזרת כל הספרים
function getAllBooks() {
  return books;
}

// החזרת ספר לפי id
function getBookById(id) {
  return books.find(book => book.id === id);
}

// הוספת ספר חדש
function addBook(newBook) {
  books.push(newBook);
  return newBook;
}

// עדכון ספר
function updateBook(id, updatedFields) {
  const book = books.find(b => b.id === id);
  if (!book) return null;
  Object.assign(book, updatedFields);
  return book;
}

// מחיקת ספר
function deleteBook(id) {
  const index = books.findIndex(b => b.id === id);
  if (index === -1) return false;
  books.splice(index, 1);
  return true;
}

module.exports = { getAllBooks, getBookById, addBook, updateBook, deleteBook };
