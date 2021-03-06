const User = require("../models/User");
const Thought = require("../models/Thought");

module.exports = {
    getThoughts(req, res) {
        Thought.find()
            .then((thoughts) => res.json(thoughts))
            .catch((err) => res.status(500).json(err));
    },
    getOneThought(req, res) {
        Thought.findOne({ _id: req.params.thoughtId })
            .select("-__v")
            .then((thought) =>
            !thought
                ? res.status(404).json({ message: "No thought with that ID" })
                : res.json(thought)
            )
            .catch((err) => res.status(500).json(err));
    },
    updateOneThought(req, res) {
        Thought.findOneAndUpdate({ _id: req.params.thoughtId }, req.body)
            .then((updatedThoughtData) => res.status(201).json(
                {
                    message: `Thought with ID ${req.params.thoughtId} was updated`,
                    update: req.body
                }
            ))
            .catch((err) => res.status(400).json(err));
    },
    deleteThought(req, res) {
        Thought.findOneAndDelete({ _id: req.params.thoughtId })
            .then((deletedThought) => User.findOneAndUpdate(
                { _id: deletedThought.userId },
                { $pull: { thoughts: deletedThought._id } }
            ))
            .then((updatedUserData) => res.status(202).json({ message: `Thought with ID ${req.params.thoughtId} was deleted` }))
            .catch((err) => res.status(400).json(err));
    },
    createThought(req, res) {
        Thought.create(req.body)
            .then((newThoughtData) => {
                User.findOneAndUpdate({ _id: req.body.userId },
                    { $push: { thoughts: newThoughtData._id } })
                .then((updatedThoughtData) => res.json(newThoughtData));
            })
            .catch((err) => res.status(400).json(err));
    }
}