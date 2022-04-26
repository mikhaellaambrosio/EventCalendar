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
		if(result){
            Event.findOne({eventTime: eventTime}).then( (result, err) => {
                if(result == null){
                    return newEvent.save()
                    .then((result, err) => {
                        if (result){
                            return ( `You have successfully added a new event!`)
                        } else {
                            return err
                        }
                    })
                } else {
                    if (result != null) {
                        return (`The selected time is not available right now.`)
                    } else {
                        return err
                    }
                }
            })
	}
})
}

// // GET ALL USERS
// module.exports.getAllUsers = async () => {
//     return await User.find().then(result => result)
// }


// // LOGIN A USER
// module.exports.login = async (reqBody) => {
//     return await User.findOne({email: reqBody.email}).then((result, err) => {
//         if(result == null){
//             return (`User does not exist`)
//         } else {
//            if (result !== null){
//                const decryptedPw = CryptoJS.AES.decrypt(result.password, process.env.SECRET_PASS).toString(CryptoJS.enc.Utf8)

//                if(reqBody.password == decryptedPw) {
//                    return {token: createToken(result)}
                   
//                } else {
//                    return {auth: `Authentication Failed!`}
//                }
//            } else {
//                return err
//            }
//         }
//     })
// }