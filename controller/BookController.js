/* Importing the Book model. */
const Book = require('../model/book');

/* This is the controller for the book. It contains all the 
functions that are used to perform CRUD operations on the book. */
const BookController = {

    /* Creating a new book. */
    createBook: async (req, res) => {
        try {

            // create a new book
            const book = new Book(req.body);

            // save the book in the database
            await book.save();

            // if the book is not saved, return an error
            if (!book) {
                res.status(400).send({
                    message: 'Book could not be created',
                    success: false
                });
            }

            // if the book is saved, return the book
            return res.status(201).send({
                message: 'Book created successfully',
                success: true,
                book
            });

        } catch (error) {
            // if there is an error, return an error
            return res.status(500).json({
                message: 'Internal server error',
                success: false
            })
        }
    },
    /* A function that is used to get a book by its id. */
    getBook: async (req, res) => {
        try {

            // create a query to find the book
            const book = await Book.findById(req.params.id);

            // if the book is not found, return an error
            if (!book) {
                return res.status(404).send({
                    message: 'Book not found',
                    success: false
                });
            }

            // if the book is found, return the book
            return res.status(200).send({
                message: 'Book found',
                success: true,
                book
            });

        } catch (error) {
            // if there is an error, return an error
            return res.status(500).json({
                message: 'Internal server error',
                success: false
            })
        }
    },
    /* A function that is used to get all the books in the database. */
    getAllBooks: async (req, res) => {
        try {

            // create a query to find all the books
            const books = await Book.find({});

            // if there are no books, return an error
            if (!books) {
                return res.status(404).send({
                    message: 'Books not found',
                    success: false
                });
            }

            // if there are books, return the books
            return res.status(200).send({
                message: 'Books found',
                success: true,
                books
            });

        } catch (error) {
            // if there is an error, return an error
            return res.status(500).json({
                message: 'Internal server error',
                success: false
            })
        }
    },
    /* This is a function that is used to update a book. */
    updateBook: async (req, res) => {
        try {

            const book = await Book.findById(req.params.id);

            // if the book is not found, return an error
            if (!book) {
                return res.status(404).send({
                    message: 'Book not found',
                    success: false
                });
            }

            // if the book is found, update the book
            book.title = req.body.title;
            book.author = req.body.author;
            book.date = req.body.date;

            // save the book in the database
            await book.save();

            // if the book is not saved, return an error
            if (!book) {
                return res.status(400).send({
                    message: 'Book could not be updated',
                    success: false
                });
            }

            // if the book is saved, return the book
            return res.status(200).send({
                message: 'Book updated successfully',
                success: true,
                book
            });

        } catch (error) {
            // if there is an error, return an error
            return res.status(500).json({
                message: 'Internal server error',
                success: false
            })
        }
    },
    /* This is a function that is used to delete a book. */
    deleteBook: async (req, res) => {
        try {

            // create a query to find the book
            const book = await Book.findByIdAndDelete(req.params.id);

            // if the book is not found, return an error
            if (!book) {
                return res.status(404).send({
                    message: 'Book not found',
                    success: false
                });
            }

            // if the book is found, return the book
            return res.status(200).send({
                message: 'Book deleted successfully',
                success: true,
                book
            });

        } catch (error) {
            // if there is an error, return an error
            return res.status(500).json({
                message: 'Internal server error',
                success: false
            })
        }
    }
}

/* Exporting the BookController object so that it can be used in other files. */
module.exports = BookController;