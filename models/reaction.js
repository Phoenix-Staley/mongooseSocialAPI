const mongoose = require("mongoose");
const formatDate = require("../utils/formatDate");

const reactionSchema = new mongoose.Schema({
    reactionId: mongoose.Types.ObjectId,
    reactionBody: { type: String, max: 280, required: true },
    username: { type: String, required: true, ref: "user" },
    createdAt: { type: Date, default: Date.now, get: formatDate }
});

module.exports = reactionSchema;