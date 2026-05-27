const express = require('express')
const bountyRouter = express.Router()
const Bounty = require('../models/bounty.js') // Name to create new document

// GET ALL
bountyRouter.get('/', async (req, res) => {
    try {
        const bounties = await Bounty.find()
        return res.status(200).send(bounties)
    } catch (err) {
        res.status(500)
        return res.send(err)
    }
})

// GET ONE
bountyRouter.get('/:_id', async (req, res) => {
    // This {object} is our filtering criteria for what we are looking for
    try {
        const foundBounty = await Bounty.findOne({ _id: req.params._id })
        return res.status(200).send(foundBounty)
    } catch (err) {
        res.status(500)
        return res.send(err)
    }
})

// POST Add One (never queries the db)
bountyRouter.post('/', async (req, res) => {
    // Create the new bounty object using our Schema and the values from the body the user posted
    const newBounty = new Bounty(req.body)
    // Send that object to the DB to be saved
    try {
        const newBountyObject = await newBounty.save()
        return res.status(201).send(newBountyObject)
    } catch (err) {
        res.status(500)
        console.log(err)
        return res.send(err)
    }
})

// DELETE ONE
bountyRouter.delete('/:_id', async (req, res) => {
    try {
        // findOneAndRemove was removed in Mongoose 8; use findOneAndDelete instead
        const deletedBounty = await Bounty.findOneAndDelete({ _id: req.params._id })
        // 202 allows for a response message, 204 deletes but has no message
        return res.status(202).send(`Successfully deleted Bounty "${deletedBounty.title}" with ID ${req.params._id}`)
    } catch (err) {
        res.status(500)
        return res.send(err)
    }
})

// PUT
bountyRouter.put('/:_id', async (req, res) => {
    try {
        const updatedBounty = await Bounty.findOneAndUpdate(
            { _id: req.params._id },
            req.body,
            { new: true }
        )
        return res.status(201).send(updatedBounty)
    } catch (err) {
        res.status(500)
        return res.send(err)
    }
})

module.exports = bountyRouter
