const Question = require('../../models/question');

module.exports = {
    index
};

async function index(req, res) {
    const questions = await Question.find({});
    res.status(200).json(questions);
}