const mongoose = require('mongoose')
const Schema = mongoose.Schema

const settingSchema = new Schema({
    notification: Boolean,
    emailNotification: Boolean,
    topicRecommendation: Boolean,
    create_at: {
        type: Date,
        default: Date.now
    },
    update_at: {
        type: Date,
        default: Date.now
    }    
})

module.exports = mongoose.model('setting', settingSchema)