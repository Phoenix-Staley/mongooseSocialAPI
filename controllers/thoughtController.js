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
                ? res.status(404).json({ message: "No user with that ID" })
                : res.json(thought)
            )
            .catch((err) => res.status(500).json(err));
    },
    createThought(req, res) {
        Thought.create(req.body)
            .then((newThoughtData) => {
                User.updateOne({ username: req.body.username },
                    { $push: { thoughts: newThoughtData._id } });
                return newThoughtData;
            })
            .then((newThoughtData) => res.json(newThoughtData))
            .catch((err) => res.status(400).json(err));
    }
}