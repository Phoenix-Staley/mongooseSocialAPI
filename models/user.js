const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, max: 30, trim: true },
    email: { type: String, required: true, validate: /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/ },
    thoughts: [
        {
            type: Schema.Types.ObjectId,
            ref: "thought"
        }
    ],
    friends: [
        {
            type: Schema.Types.ObjectId,
            ref: "user"
        }
    ]
});

userSchema.methods.friendCount = function () {
    return this.friends.length;
}

const User = new mongoose.model("user", userSchema);

module.exports = User;