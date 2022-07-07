const User = require("../models/User");

module.exports = {
    getUsers(req, res) {
        User.find()
            .then((users) => res.json(users))
            .catch((err) => res.status(500).json(err));
    },
    getOneUser(req, res) {
        User.findOne({ _id: req.params.userId })
            .select("-__v")
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
    addFriend(req, res) {
        User.update({ _id: req.params.userId },
            { $push: { friends: req.params.friendId } })
            .then((updatedUserData) => res.json(updatedUserData))
            .catch((err) => res.status(500).json(err));
    }
}