/* Importing the mongoose module. */
const mongoose = require('mongoose');

/* A way to set the name of the database. */
const nameDatabase = process.env.DB_NAME || 'book-store';

/* Connecting to the database. */
mongoose.connect(`mongodb://localhost:27017/${nameDatabase}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});