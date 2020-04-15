const express = require('express')
const router = new express.Router()

router.get('/exerciseOne', async (req, res) => {
    const result = []
    for(let i = 0; i < 5; i++){
        result.push(Math.floor(Math.random() * 1000) + 1)
    }
    res.send(result)
})

module.exports = router