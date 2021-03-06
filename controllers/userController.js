const User = require("../models/User");
const Thought = require("../models/Thought");

module.exports = {
    getUsers(req, res) {
        User.find()
            .select("-__v")
            .populate("friends")
            .populate("thoughts")
            .then((users) => res.json(users))
            .catch((err) => res.status(500).json(err));
    },
    getOneUser(req, res) {
        User.findOne({ _id: req.params.userId })
            .select("-__v")
            .populate("friends")
            .populate("thoughts")
            .then((user) =>
            !user
                ? res.status(404).json({ message: "No user with that ID" })
                : res.json(user)
            )
            .catch((err) => res.status(500).json(err));
    },
    createUser(req, res) {
        User.create(req.body)
            .then((newUserData) => res.json(newUserData))
            .catch((err) => res.status(400).json(err));
    },
    updateOneUser(req, res) {
        User.findOneAndUpdate({ _id: req.params.userId }, req.body)
            .then((updatedUserData) => res.status(201).json(updatedUserData))
            .catch((err) => res.status(400).json(err));
    },
    deleteUser(req, res) {
        User.findOne({ _id: req.params.userId })
            .select("-__v")
            // Deletes the thoughts associated with this user, before deleting the user
            .then((user) => Thought.deleteMany({ _id: { $in: user.thoughts } }))
            .then((wereThoughtsDeleted) => User.deleteOne({ _id: req.params.userId }))
            .then((wasUserDeleted) => res.status(202).json({ message: `User with ID ${req.params.userId} and their associated thoughts were deleted` }))
            .catch((err) => res.status(500).json(err));
    },
    addFriend(req, res) {
        User.findOneAndUpdate({ _id: req.params.userId },
            { $push: { friends: req.params.friendId } })
            .then((updatedUserData) => res.json({ message: `The user with ID ${req.params.userId} has added a new friend` }))
            .catch((err) => res.status(500).json(err));
    },
    removeFriend(req, res) {
        User.findOneAndUpdate({ _id: req.params.userId },
            { $pull: { friends: req.params.friendId } }
        )
        .then((updatedUserData) => res.json({ message: `The user with ID ${req.params.userId} has removed a friend` }))
        .catch((err) => res.status(500).json(err));
    }
}