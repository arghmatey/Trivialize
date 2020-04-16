const mongoose = require('mongoose');

const questionsSchema = new mongoose.Schema({
    question: String,
    answer: String
});

const triviaSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    numberOfQuestions: {
        type: Number,
        min: 5,
        max: 10
    },
    questions: [questionsSchema]
}, {
    timestamps: true
});

module.exports = mongoose.model('Trivia', triviaSchema);