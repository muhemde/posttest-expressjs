const express = require("express");
const books = require("./routes/books");
const app = express();
app.use(express.json());
app.use(books);

app.listen(3000, () => {
  console.log(" Server Connect! ");
});