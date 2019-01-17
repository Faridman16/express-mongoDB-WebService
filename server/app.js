const express = require("express")
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')
const helmet = require('helmet')
const cloudinary = require('cloudinary')

const app = express()
const url = process.env.MONGODB_URI || "mongodb://admin123:admin123@ds131531.mlab.com:31531/farid_apps"

cloudinary.config({
    cloud_name: 'faridcloudimage',
    api_key: '284292755421543',
    api_secret: 'uJ2e0TbEul65XKvx2i001Jep_CE',
})


mongoose.connect(url, { useNewUrlParser: true })

const port = 3000 || process.env.port

app.use(cors())
app.use(bodyParser.json())
app.use(helmet())

const listOfRoutes = require('./routes')
app.use('/api', listOfRoutes.routesApi)
app.use('/angular', listOfRoutes.routesAngular)
app.use('/auth', listOfRoutes.authRouter)

app.listen(port, ()=>{
    console.log('Server is UP. PORT : '+port)
})