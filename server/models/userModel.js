const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    username: String,
    password: String,
    profile:{
        type:Schema.Types.ObjectId,
        ref: 'Profile',
    },
    role: String,
    status: Boolean,
    create_at: {
        type: Date,
        default: Date.now
    },
    update_at: {
        type: Date,
        default: Date.now
    }
})

userSchema.methods.changeStatus = (user_id)=>{
    this.status?false:true;
}

module.exports = mongoose.model('User', userSchema)