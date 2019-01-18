const express = require('express')
const router = express.Router()
const UserModel = require('../models/userModel')

router.use(function timeLog(req, res, next){
    console.log('Incoming : ANGULAR ----> Time: ', Date.now())
    next()
})

router.post('/', (req, res, next) => {
    UserModel.findOne({
        username: req.body.username,
        password: req.body.password,
    }, (err, user) => {
        console.log({valid: 1, user})
        user?res.json({valid: 1, user}) : res.json({valid: 0})
    })
})

module.exports = router;