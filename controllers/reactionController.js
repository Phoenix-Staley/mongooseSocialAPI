const Thought = require("../models/Thought");

module.exports = {
    createReaction(req, res) {
        Thought.findOneAndUpdate({ _id: req.params.thoughtId },
            { $push: { reactions: req.body } })
            .then((updatedThoughtData) => res.json(updatedThoughtData.reactions[-1]))
            .catch((err) => res.status(400).json(err));
    },
    deleteReaction(req,res) {
        Thought.findOneAndUpdate({ _id: req.params.thoughtId },
            { $pull: { reactions: req.body.reactionId } }
        )
        .then((updatedThoughtData) => res.status(201).json({ message: `Successfully deleted the reaction with ID ${req.body.reactionId}` }))
        .catch((err) => res.status(400).json(err));
    }
}