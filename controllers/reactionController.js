const Thought = require("../models/Thought");

module.exports = {
    createThought(req, res) {
        Thought.updateOne({ _id: req.params.thoughtId },
            { $push: { reactions: req.body } })
            .then((updatedThoughtData) => res.json(updatedThoughtData.reactions[-1]))
            .catch((err) => res.status(400).json(err));
    }
}