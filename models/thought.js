const mongoose = require("mongoose");
const reactionSchema = require("./reaction");

const thoughtSchema = new mongoose.Schema({
    thoughtText: { type: String, max: 280, required: true },
    createdAt: { type: Date, required: true },
    username: { type: String, required: true, ref: "user" },
    reactions: [reactionSchema]
});

thoughtSchema.methods.reactionCount = function () {
    return this.reactions.length;
}

const Thought = new mongoose.model("thought", thoughtSchema);

module.exports = Thought;