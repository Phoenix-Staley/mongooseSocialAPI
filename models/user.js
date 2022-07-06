const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: true,
        max: 30,
        trim: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        // Ensures anything stored here is a valid email address
        validate: /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    },
    // Stores any thoughts created by this user
    thoughts: [
        {
            type: Schema.Types.ObjectId,
            ref: "thought"
        }
    ],
    // Stores any friends this user has
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