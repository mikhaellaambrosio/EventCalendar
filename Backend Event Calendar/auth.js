const jwt = require('jsonwebtoken');


//sign method
module.exports.createToken = (data) => {
	let userData = {
		id: data._id,
		email: data.email
	}
	//sign method creates the token
	return jwt.sign(userData, process.env.SECRET_PASS )
}

// verify method
module.exports.verify = (req, res, next) => {
	const requestToken = req.headers.authorization
	// console.log(requestToken)
	
	if(typeof requestToken == "undefined"){
		res.status(401).send(`Token missing`)

	}else{
		const token = requestToken.slice(7, requestToken.length);
		// console.log(token)

		if(typeof token !== "undefined"){

			return jwt.verify(token, process.env.SECRET_PASS, (err, data) => {
				if(err){
					return res.send({auth: `auth failed!`})

				} else{
					next()
				}
			})
		}
	}
}

//decode method
module.exports.decode = (bearerToken) => {
	const token = bearerToken.slice(7, bearerToken.length)
	return jwt.decode(token)
}



