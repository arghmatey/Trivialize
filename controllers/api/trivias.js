const Trivia = require('../../models/trivia');

module.exports = {
    index,
    create
}

async function index(req, res) {
    const trivias = await Trivia.find({});
    res.status(200).json(trivias);
}

async function create(req, res) {
    const trivia = await Trivia.create(req.body);
    res.status(201).josn(trivia);
}