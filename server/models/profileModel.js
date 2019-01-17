const moongose = require("mongoose");
const Schema = moongose.Schema

const profileSchema = new Schema(
    {
        name: {
            firstName: String,
            lastName: String
        },
        email: String,
        profile_pic: String,
        user: {type:Schema.Types.ObjectId, ref:'User'},
        followers: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Profile',
            }
        ],
        following: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Profile',
            }
        ],
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

profileSchema.methods.follow = function(user_id){
    if (this.following.indexOf(user_id) === -1){
        this.following.push(user_id)
    }
    return this.save()
}

profileSchema.methods.follow_me = function(fs) {
    this.followers.push(fs)
    this.save()
    return
}

module.exports = moongose.model('Profile', profileSchema)