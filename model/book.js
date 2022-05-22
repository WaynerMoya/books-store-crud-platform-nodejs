/* Importing the mongoose library. */
const mongoose = require('mongoose');
/* Creating a new schema object. */
const Schema = mongoose.Schema;

/* Creating a new schema object. */
const bookSchema = new Schema({
    /* Creating a new field in the schema called title. It is a string and it is required. */
    title: {
        type: String,
        required: true
    },
    /* Creating a new field in the schema called author. It is a string and it is required. */
    author: {
        type: String,
        required: true
    },
    /* Creating a new field in the schema called date. It is a date and it is required. */
    date: {
        type: Date,
        required: true
    }
}, {
    /* Adding a createdAt and updatedAt field to the schema. */
    timestamps: true
})

/* Exporting the model to be used in other files. */
module.exports = mongoose.model('Book', bookSchema);