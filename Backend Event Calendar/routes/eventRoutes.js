const express = require(`express`);
const router = express.Router()

const {
    createEvent,
    getAllEvents,
    getAnEvent,
    updateEvent,
    deleteEvent
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

// GET ALL EVENTS
router.get(`/allEvents`, async (req,res) => {
    try {
        await getAllEvents().then(result => res.send(result))
    } catch(err) {
        res.status(500).json(err)
    }
})

// GET A SPECIFIC EVENT
router.get('/:eventId', async (req, res) => {
	try{
		await getAnEvent(req.params.eventId).then(result => res.send(result))

	}catch(err){
		res.status(500).json(err)
	}
})

// UPDATE AN EVENT
router.put('/:eventId/updateEvent', async (req, res) => {
	try{
		await updateEvent(req.params.eventId, req.body).then(result => res.send(result))

	}catch(err){
		res.status(500).json(err)
	}
})

// DELETE AN EVENT
router.delete(`/:eventId/deleteEvent`, async (req,res) => {
    try {
        await deleteEvent(req.params.eventId).then(result => res.send(result))
    } catch (err) {
        res.status(500).json(err)
    }
})




// EXPORT ROUTES MODULE
module.exports = router