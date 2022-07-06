const mongoose = require("mongoose");

const reactionSchema = new mongoose.Schema({
    reactionId: mongoose.Types.ObjectId,
    reactionBody: { type: String, max: 280, required: true },
    username: { type: String, required: true, ref: "user" },
    createdAt: { type: Date, required: true }
});

const Reaction = new mongoose.model("reaction", reactionSchema);

module.exports = Reaction;