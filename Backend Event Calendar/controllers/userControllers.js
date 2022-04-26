const { createToken } = require("../auth")
const User = require(`./../models/User`)
const CryptoJS = require("crypto-js");


// REGISTER A USER
module.exports.register = async (reqBody) => {
    const {firstName, lastName, email, password, confirmPw} = reqBody

    const newUser = new User({
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: CryptoJS.AES.encrypt(password, process.env.SECRET_PASS).toString(),
        confirmPw: CryptoJS.AES.encrypt(confirmPw, process.env.SECRET_PASS).toString()
    })
    return await User.findOne({email: email}).then((result, err) =>{
		if(result == null){
			if (reqBody.password === reqBody.confirmPw){
                return newUser.save()
                .then((result, err) => {
                    if (result){
                        return ( `You have successfully registered!`)
                    } else {
                        return err
                    }
                })
            } else {
                if (reqBody.password !== reqBody.confirmPw){
                    return (`Those passwords do not match. Please try again.`)
                }
            }
		} else {
			if(result != null){
				return (`Email already exists, please use a different one.`)
			} else {
				return err
			}
		}
	})
}
