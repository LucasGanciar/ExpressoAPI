const express = require('express')
const router = new express.Router()

router.post('/exerciseTwo', async (req, res) => {
    const array = req.body
    console.log(array)
    if(Array.isArray(array)){
        res.send({ result: array[0]})
    } else {
        res.status(500).send({ error: 'Parameter provided is not an array' })
    }
})

module.exports = router