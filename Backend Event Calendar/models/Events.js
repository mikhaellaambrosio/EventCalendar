const mongoose = require(`mongoose`)

const eventSchema = new mongoose.Schema ({
    eventTitle: {
        type: String,
        required: [true, `Event Title is required!`]
    },
    eventDate: {
        type: String,
        required: [true, `Event Date is required!`]
    },
    eventTime: {
        type: Number,
        required: [true, `Event Time is required!`]
    },
    eventLocation: {
        type: String,
        required: [true, `Event Location is required!`]
    },
    eventDescription: {
        type: String,
        required: [true, `Event Decription is required!`]
    },
    guests: [{
        type: String,
        required: [true, `Event Guests is required!`]
    }]
}, {timestamps: true})

module.exports = mongoose.model(`Event`, eventSchema)