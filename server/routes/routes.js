const express = require('express')
const router = express.Router()
const controller = require('../controllers')

router.use(function timeLog(req, res, next){
    console.log('Incoming : API ----> Time: ', Date.now())
    next()
})

//API ROUTES FOR ARTICLE
router.get('/article', controller.articleController.getAll)
router.post('/article', controller.articleController.addArticle)

//API ROUTES FOR AUTH
router.post('/login', controller.authController.login)

//AP ROUTES FOR USER
router.post('/users', controller.userController.addUser)
router.get('/fetchUsers', controller.userController.getUsers)

module.exports = router