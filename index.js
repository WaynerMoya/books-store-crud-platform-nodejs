/* Importing the express module. */
const express = require('express');

/* Setting up the port that the server will be listening to. */
const port = process.env.PORT || 3001;

/* A middleware that allows the server to accept requests from other domains. */
const cors = require('cors');

/* Creating an instance of the express module. */
const app = express();

/* Importing the book.js file from the routes folder. */
const book = require('./routes/book');

/* A middleware that parses the body of the request and makes it available on the request object. */
app.use(express.json());

/* Allowing the server to accept requests from other domains. */
app.use(cors());

/* Telling the server to use the book.js file from the routes folder. */
app.use('/book', book);

/* Listening to the port that we have set up. */
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})