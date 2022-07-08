const Thought = require("../models/Thought");

module.exports = {
    createReaction(req, res) {
        Thought.findOneAndUpdate(
                { _id: req.params.thoughtId },
                { $push: { reactions: req.body } }
            )
            .then((updatedThoughtData) => res.status(201).json(updatedThoughtData))
            .catch((err) => res.status(400).json(err));
    },
    deleteReaction(req,res) {
        Thought.findOneAndUpdate(
                { _id: req.params.thoughtId },
                { $pull: { reactions: { _id: req.body.reactionId } } }
            )
            .then((updatedThoughtData) => res.status(201).json({ message: `Successfully deleted the reaction with ID ${req.body.reactionId}` }))
            .catch((err) => res.status(400).json(err));
    }
}