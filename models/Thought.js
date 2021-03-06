const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const reactionSchema = require("./Reaction");
const formatDate = require("../utils/formatDate");


const thoughtSchema = new mongoose.Schema({
    // Validates that there is 1-280 characters
    thoughtText: { type: String, validate: /.{1,}/, max: 280, required: true },
    createdAt: {
        type: Date,
        default: Date.now,
        get: formatDate
    },
    username: { type: String, required: true },
    userId: { type: Schema.Types.ObjectId, required: true, ref: "user" },
    reactions: [reactionSchema]
});

thoughtSchema.virtual("reactionCount").get(function () {
    return this.reactions.length;
});

const Thought = new mongoose.model("thought", thoughtSchema);

module.exports = Thought;