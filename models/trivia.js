const mongoose = require('mongoose');


const questionsSchema = new mongoose.Schema({
    question: String,
    answer: String
});

const triviaSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    name: {
        type: String,
        required: true
    },
    questions: [questionsSchema]
}, {
    timestamps: true
});

module.exports = mongoose.model('Trivia', triviaSchema);