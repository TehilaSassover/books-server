const express = require('express');
const booksRoutes = require('./routes/booksRoutes');

const app = express();
app.use(express.json());

app.use('/books', booksRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
