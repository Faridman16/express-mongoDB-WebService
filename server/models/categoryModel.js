const mongoose = require('mongoose')
const Schema = mongoose.Schema

const categorySchema = new Schema(
    {
        category_name: String,
        order: {
            type: Number,
            default: ()=>{
                return this.order++
            }
        },
        subCategorys: [{type:Schema.Types.ObjectId, ref:'subCategory'}],
        create_at: {
            type: Date,
            default: Date.now
        },
        update_at: {
            type: Date,
            default: Date.now
        }
    }
)

module.exports = mongoose.model('category', categorySchema)