const express = require('express')
const router = express.router
const UserModel = require('../models/userModel')

router.use(()=> {
    console.log('auth was called!')
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