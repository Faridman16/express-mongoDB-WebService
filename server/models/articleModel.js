const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let articleSchema = new Schema({
    text: String,
    title: String,
    description: String,
    feature_img: String,
    claps: Number,
    category: {type: mongoose.Schema.Types.ObjectId, ref:'category'},
    subCategory: {type: mongoose.Schema.Types.ObjectId, ref:'subCategory'},
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    comments: [{
        author:{
            type:mongoose.Schema.Types.ObjectId,
            ref: 'User',
        },
        text: String,
        rating: Number,
        create_at: {
            type: Date,
            default: Date.now
        }
    }],
    create_at: {
        type: Date,
        default: Date.now
    },
    update_at: {
        type: Date,
        default: Date.now
    }
});

articleSchema.methods.clap = function(){
    this.claps++
    return this.save()
}

articleSchema.methods.comment = function(c){
    this.commenst.push(c)
    return this.save()
}

articleSchema.methods.addAuthor = function(author_id){
    this.author = author_id;
    return this.save()
}

articleSchema.methods.getUserArticle = function(_id){
    articleSchema.find({'author': _id}).then((article)=>{
        return article
    })
}

module.exports = mongoose.model('Article', articleSchema);