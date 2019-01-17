const Article = require('../models/articleModel');
const cloudinary = require('cloudinary');

module.exports = {
    addArticle: (req, res, next) =>{
        if(img_path){
            cloudinary.uploader.upload(img_path, (err, result)=>{
                Article.create({
                    text:req.body.text,
                    title:req.body.title,
                    claps:0,
                    description:req.body.description,
                    feature_img:req.body.feature_img,
                    author:req.body.id
                }, (err,result)=>{
                    if(err) res.send(404);
                })
            })
        }else {
            Article.create({
                text:req.body.text,
                title:req.body.title,
                claps:0,
                description:req.body.description,
                feature_img:req.body.feature_img,
                author:req.body.id
            }, (err,result)=>{
                if(err) res.send(404);
            })
        }
    },
    getAll: (req ,res ,next)=>{
        Article.find().populate('author').populate('comments.author').exec((err,article)=>{
            if(err){res.send(err)}
            else if(!article){res.send(404)}
            else{res.send(article)}
        })
    },
    clapArticle: (req, res, next)=>{
        Article.findById(req.body.article_id).then((article)=>{
            article.clap().then(()=>{
                res.json({msg:"Done"})
            })
        })
    },
    commentArticle: (req, res, next)=>{
        Article.findById(req.body.article_id).then((article)=>{
            article.comment({
                author: req.body.author_id,
                text: req.body.comment
            }).then(()=>{
                res.json({msg:"Done"})
            })
        })
    },
    getArticle: (req, res, next)=>{
        Article.findById(req.params.id).populate('author').populate('comments.author').exec((err, article)=>{
            if(err){res.send(err)}
            else if(!article){res.send(404)}
            else{res.send(article)}  
        })
    }
}