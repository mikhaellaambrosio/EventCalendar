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

// GET ALL USERS
module.exports.getAllUsers = async () => {
    return await User.find().then(result => result)
}


// LOGIN A USER
module.exports.login = async (reqBody) => {
    return await User.findOne({email: reqBody.email}).then((result, err) => {
        if(result == null){
            return (`User does not exist`)
        } else {
           if (result !== null){
               const decryptedPw = CryptoJS.AES.decrypt(result.password, process.env.SECRET_PASS).toString(CryptoJS.enc.Utf8)

               if(reqBody.password == decryptedPw) {
                   return {token: createToken(result)}
                   
               } else {
                   return {auth: `Authentication Failed!`}
               }
           } else {
               return err
           }
        }
    })
}