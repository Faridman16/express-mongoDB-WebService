const User = require('../models/userModel')

module.exports = {
    login: (req, res, next)=>{
        User.findOne({'username':req.body.username}, (err, user)=>{
            if(!user)res.json({message: 'User Not Found!'})
            if(req.body.password!=user.password)res.json({message: 'Wrong Password!'})
            res.json(user)
        })
    },
}