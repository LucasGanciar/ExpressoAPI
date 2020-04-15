const express = require('express')
const router = new express.Router()

router.post('/exerciseSix', async (req, res) => {
    const array = req.body
    if(Array.isArray(array)){
        const result = array.reduce((total, num) => total + num) / array.length
        res.send({ media: result})
    } else {
        res.status(500).send({ error: 'Parameter provided is not an array' })
    }
})

module.exports = router