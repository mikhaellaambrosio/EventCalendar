const { createToken } = require("../auth")
const Event = require(`./../models/Events`)
const CryptoJS = require("crypto-js");


// CREATE AN EVENT
module.exports.createEvent = async (reqBody) => {
    const {eventTitle, eventDate, eventTime, eventLocation, eventDescription, guests} = reqBody

    const newEvent = new Event({
        eventTitle: eventTitle,
        eventDate: eventDate,
        eventTime: eventTime,
        eventLocation: eventLocation,
        eventDescription: eventDescription,
        guests: guests
    })
    return await Event.findOne({eventDate: eventDate}).then((result, err) =>{
        // console.log(result)
		if(result == null){
            Event.findOne({eventTime: eventTime}).then( (result, err) => {
                console.log(result)
                if(result == null){
                    return newEvent.save()
                    .then((result, err) => {
                        // console.log(result)
                        if (result){
                            return ( `You have successfully added a new event!`)
                        } else {
                            return err
                        }
                    })
                } else {
                    if (result !== null) {
                        return (`The selected time is not available right now.`)
                    } else {
                        return err
                    }
                }
            })
	}
})
}

// GET ALL USERS
module.exports.getAllEvents = async () => {
    return await Event.find().then(result => result)
}

// GET A SPECIFIC EVENT
module.exports.getAnEvent = async (id) => {

	return await Event.findById(id).then((result, err) => {
		if(result){
			return result
		} else {
			if(result == null){
				return {message: `Event not found. Please try seomething else.`}
			}else{
				return err
			}
		}
	})
}

// UPDATE AN EVENT
module.exports.updateEvent = async (eventId, reqBody) => {
    let eventData =  {
        eventTitle: reqBody.eventTitle,
        eventDate: reqBody.eventDate,
        eventTime: reqBody.eventTime,
        eventLocation: reqBody.eventLocation,
        eventDescription: reqBody.eventDescription,
        guests: reqBody.guests
    }
	return await Event.findByIdAndUpdate(eventId, {$set: eventData}, {new: true}).then(result => {
        if(result !== null){
            return {result}
        } else {
            return {message: `Failed to update event. Try again.`}
        }
    })
}

// DELETE AN EVENT
module.exports.deleteEvent = async (eventId) => {

    return await Event.findByIdAndDelete(eventId).then((result,err) => {
        // result ? true :err
        if(result){
            return (`You have successfully deleted the event.`)
        } else{
            return err
        }
    })
}