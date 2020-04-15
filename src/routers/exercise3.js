const express = require('express')
const router = new express.Router()

router.post('/exerciseThree', async (req, res) => {
    const array = req.body
    if(Array.isArray(array)){
        array.pop()
        res.send(array)
    } else {
        res.status(500).send({ error: 'Parameter provided is not an array' })
    }
})

module.exports = router

module.exports = router