const mongoose = require('mongoose')
const Schema = mongoose.Schema

const menuSchema = new Schema({
    menu_name: String,
    order: {
        type: Number,
        default: ()=>{
            return this.order++
        }
    },
    subMenu: {
        type: Schema.Types.ObjectId,
        ref: 'subMenu'
    },
    create_at: {
        type: Date,
        default: Date.now
    },
    update_at: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('menu', menuSchema)