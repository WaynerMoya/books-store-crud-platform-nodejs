/* This is importing the express module. */
const express = require('express');

/* This is creating a new router object. */
const route = express.Router();

/* This is importing the BookController.js file. */
const BookController = require('../controller/BookController');

/* This route will be used to get all books  */
route.get('/get-books', BookController.getAllBooks);

/* This route will be used to get a book by id*/
route.get('/get-book/:id', BookController.getBook);

/* This route will be used to create a new book*/
route.post('/add-book', BookController.createBook);

/* This route will be used to update a book by id */
route.put('/update-book/:id', BookController.updateBook);

/* This route will be used to delete a book by id */
route.delete('/delete-book/:id', BookController.deleteBook);

/* This is exporting the route to the server.js file. */
module.exports = route;