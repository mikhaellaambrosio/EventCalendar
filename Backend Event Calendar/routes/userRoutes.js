const express = require(`express`);
const router = express.Router()

const {
    register,
    getAllUsers,
    login
} = require ('./../controllers/userControllers')

const {verify, decode} = require(`./../auth`)

// REGISTER A USER
router.post(`/register`, async (req,res) => {
    try {
        await register(req.body).then(result => res.send(result))
    } catch(err) {
        res.status(500).json(err)
    }
})

// GET ALL USERS 
router.get(`/allUsers`, async (req,res) => {
    try {
        await getAllUsers().then(result => res.send(result))
    } catch(err) {
        res.status(500).json(err)
    }
})

// LOGIN A USER
router.post(`/login`, (req,res) => {

    try {
        login(req.body).then(result => res.send(result))
    } catch (err) {
        res.status(500).json(err)
    }
})





// EXPORT ROUTES MODULE
module.exports = router