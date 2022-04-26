const express = require(`express`);
const router = express.Router()

const {
    createEvent
} = require ('./../controllers/eventControllers')

const {verify, decode} = require(`./../auth`)

// CREATE AN EVENT
router.post(`/createEvent`, async (req,res) => {
    try {
        await createEvent(req.body).then(result => res.send(result))
    } catch(err) {
        res.status(500).json(err)
    }
})

// // GET ALL USERS 
// router.get(`/allUsers`, async (req,res) => {
//     try {
//         await getAllUsers().then(result => res.send(result))
//     } catch(err) {
//         res.status(500).json(err)
//     }
// })

// // LOGIN A USER
// router.post(`/login`, (req,res) => {

//     try {
//         login(req.body).then(result => res.send(result))
//     } catch (err) {
//         res.status(500).json(err)
//     }
// })





// EXPORT ROUTES MODULE
module.exports = router