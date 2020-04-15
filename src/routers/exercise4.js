const express = require('express')
const router = new express.Router()

router.post('/exerciseFour', async (req, res) => {
    const param = req.body
    if(Array.isArray(param.array)){
        const array = param.array.sort()
        if(param.sort === 'ASC'){
            res.send(array)
        } else if(param.sort === 'DESC'){
            res.send(array.reverse())
        } else {
            res.status(500).send({ error: 'Sort provided is neither ASC or DESC' })
        }
    } else {
        res.status(500).send({ error: 'Parameter provided is not valid' })
    }
})

module.exports = router