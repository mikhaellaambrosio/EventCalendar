const express = require(`express`);
const router = express.Router()

const {register} = require ('./../controllers/userControllers')
const {verify, decode} = require(`./../auth`)

// REGISTER A USER
router.post(`/register`, async (req,res) => {
    try {
        await register(req.body).then(result => res.send(result))
    } catch(err) {
        res.status(500).json(err)
    }
})

// EXPORT ROUTES MODULE
module.exports = router