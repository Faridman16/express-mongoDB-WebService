const mongoose = require('mongoose')
const Schema = mongoose.Schema

const subCategorySchema = new Schema({
    subCategory_name: String,
    order: {
        type: Number,
        default: ()=>{
            return this.order++
        }
    },
    category:{type:Schema.Types.ObjectId, ref:'category'},
    create_at: {
        type: Date,
        default: Date.now
    },
    update_at: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('subCategory', subCategorySchema)