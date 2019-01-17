const mongoose = require('mongoose')
const Schema = mongoose.Schema

const clapsHistorySchema = new Schema({
    article:{type:Schema.Types.ObjectId, ref:'article'},
    profile:{type:Schema.Types.ObjectId, ref:'profile'},
    create_at: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('clapsHistory', clapsHistorySchema)