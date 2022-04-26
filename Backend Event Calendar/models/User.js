const mongoose = require(`mongoose`)

const userSchema = new mongoose.Schema ({
    firstName: {
        type: String,
        required: [true, `First Name is required!`],
        unique: true
    },
    lastName: {
        type: String,
        required: [true, `Last Name is required!`],
        unique: true
    },
    email: {
        type: String,
        required: [true, `Email is required!`],
        unique: true
    },
    password: {
        type: String,
        required: [true, `Password is required!`]
    },
    confirmPw: {
        type: String,
        required: [true, `Password is required!`]
    }
    
}, {timestamps: true})

module.exports = mongoose.model(`User`, userSchema)