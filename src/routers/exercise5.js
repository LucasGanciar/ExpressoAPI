const express = require('express')
const router = new express.Router()

router.post('/exerciseFive', async (req, res) => {
    const array = req.body
    if(Array.isArray(array)){
        const result = array.map((current) => current * current)
        res.send(result)
    } else {
        res.status(500).send({ error: 'Parameter provided is not an array' })
    }
})

module.exports = router