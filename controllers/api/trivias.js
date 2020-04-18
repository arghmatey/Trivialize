const Trivia = require('../../models/trivia');

module.exports = {
    index,
    create,
    delete: deleteOne,
    show,
    update
}

async function index(req, res) {
    const trivias = await Trivia.find({});
    res.status(200).json(trivias);
}

async function create(req, res) {
    const trivia = await Trivia.create(req.body);
    res.status(201).json(trivia);
}

async function deleteOne(req, res) {
    const deletedTrivia = await Trivia.findByIdAndRemove(req.params.id);
    res.status(200).json(deletedTrivia)
}

async function show(req, res) {
    const trivia = await Trivia.findById(req.params.id);
    res.status(200).json(trivia);
}

async function update(req, res) {
    const updateTrivia = await Trivia.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(updateTrivia);
}