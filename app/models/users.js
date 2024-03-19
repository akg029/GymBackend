const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');

const userSchema = new Schema({
    firstName: {
        type: String,
        trim: true,
        maxlength: 50,
        minlength: 2 // Adjust the minimum length as needed
    },
    lastName: {
        type: String,
        trim: true,
        maxlength: 50,
        minlength: 2 // Adjust the minimum length as needed
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },

    password: {
        type: String,
        maxlength: 100,
        minlength: 8,
        required: true
    },
    address: {
        type: String,
        trim: true
    },
    city: {
        type: String,
        trim: true
    },
    state: {
        type: String,
        trim: true
    },
    pinCode: {
        type: String,
        maxlength: 10
    }
},
{
    timestamps: true
});

userSchema.pre("save", async function(next) {
    if (this.isModified("password")) {
        this.password = await bcrypt.hash(this.password, 10);
    }
    next();
});

const Users = mongoose.model("users", userSchema);

module.exports = Users;
