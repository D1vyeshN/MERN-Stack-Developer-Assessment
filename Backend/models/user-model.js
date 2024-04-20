
const mongoose = require("mongoose")
const jwt = require("jsonwebtoken")


const userSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        require: true,
    },
    password: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        unique: true,
        require: true,
    }
})

// --------------------
// generate token instance
// --------------------
userSchema.methods.generateToken = async function () {
    try {
        return jwt.sign({
            username: this.username
        }, process.env.JWT_SECRET, {
            expiresIn: "3600000"
        })
    } catch (error) {
        console.log(error);
    }
}

exports.User = new mongoose.model('User', userSchema)
