const mongoose = require('mongoose')
const Schema = mongoose.Schema

const SubMenuSchema = new Schema({
    subMenu_name: String,
    order: String,
    create_at: {
        type: Date,
        default: Date.now
    },
    update_at: {
        type: Date,
        default: Date.now
    }    
})

module.exports = mongoose.model('subMenu', SubMenuSchema)