const mongoose = require("mongoose");

const reactionSchema = new mongoose.Schema({
    reactionId: mongoose.Types.ObjectId,
    reactionBody: { type: String, max: 280, required: true },
    username: { type: String, required: true, ref: "user" },
    createdAt: { type: Date, required: true }
});

module.exports = reactionSchema;