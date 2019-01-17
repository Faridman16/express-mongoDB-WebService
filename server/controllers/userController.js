const User = require('../models/userModel')
const Profile = require('../models/profileModel')

module.exports = {
    addUser: (req, res, next)=>{
        User.create({
            username: req.body.username,
            password: req.body.password,
            status: true,
        }, (err, user)=>{
            Profile.create({
                name: req.body.name,
                email: req.body.email,
                profile_pic:req.body.profile_pic,
                user:user._id
            },(err,profile)=>{
                User.findByIdAndUpdate(profile.user, {profile:profile._id}, (err,result)=>{
                    res.json(result)
                })
            })
        })
    },
    getUsers: (req, res, next)=>{
        User.find().populate('profile').exec((err,user)=>{
            res.json(user)
        })
    },
    getUser: (req, res, next)=>{
        User.findById(req.body.id).exec((err,result)=>{
            if(err)res.send(404)
            res.json(result)
        })
    },
    updateUser: (req, res, next)=>{
        User.findByIdAndUpdate(req.body.id, {
            name:req.body.name,
            email:req.body.email,
            profile_pic:req.body.profile_pic
        }, (err,result)=>{
            if(err)res.send(400)
            res.json(result)
        })
    },
    deleteUser: (req, res, next)=>{
        User.findByIdAndDelete(req.body.id,(err,result)=>{
            if(err)res.send(400)
            res.json({message:"done"})
        })
    },
    followUser: (req,res, next)=>{
        User.findById(req.body.id,(err,result)=>{
            if(err)res.send(400)
            result.follow(req.body.follow_id).populate('following').exec((err,result)=>{
                if(err)res.send(400)
                res.json({message:"Following "+result.name})
            })
        })
    },
    userFollowing: (req, res, next)=>{
        User.findById(req.body.id).exec((err,result)=>{
            if(err)res.send(404)
            res.json(result)
        })
    }
}