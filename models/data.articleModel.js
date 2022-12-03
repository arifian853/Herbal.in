const mongoose = require("mongoose");

const articleDataSchema = new mongoose.Schema({
    createdAt: {
        type: Date,
    },
    article_title: {
        type: String
    },
    article_image: {
        type: String
    },
    article_description: {
        type: String
    },
    article_author: {
        type: String
    },
    id: {
        type: Number
    },
})

module.exports = mongoose.model('Articles', articleDataSchema);