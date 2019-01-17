const Menu = require('../models/menuModel')
const Category = require('../models/categoryModel')
const SubCategory = require('../models/subCategoryModel')

module.exports = {
    //CONTROLLER FOR MENUS
    getMenus: (req, res, next)=>{
        Menu.find().populate('subMenu',(err, menu)=>{
            if(menu)res.json(menu)
        })
    },
    addMenu: (req, res, next)=>{
        Menu.create({
            menu_name: req.body.menu_name,
             order: req.body.order
        },(err,menu)=>{
            if(menu)res.json({message: 'Done'})
        })
    },
    editMenu: (req, res, next)=>{
        Menu.findByIdAndUpdate(req.body._id, {menu_name: req.body.menu_name, order: req.body.order},(err,menu)=>{
            if(menu)res.json({message: 'Done'})
        })
    },
    deleteMenu: (req, res, next)=>{
        Menu.findByIdAndRemove(req.body._id, (err, menu)=>{
            if(menu)res.json({message: 'Done'})
        })
    },
    //CONTROLLER FOR CATEGORYS
    getCategorys: (req, res, next)=>{
        Category.find().populate('subCategory', (err,categorys)=>{
            if(categorys)res.json({message:'Done'})
        })
    },
    addCategory: (req, res, next)=>{
        Category.create({
            category_name: req.body.category_name,
        },(err,category)=>{
            if(category)res.json({message:'Done'})
        })
    },
    editCategory: (req, res, next)=>{
        Category.findByIdAndUpdate(req.body._id, {category_name: req.body.category_name},(err,category)=>{
            if(category)res.json({message:'Done'})
        })
    },
    deleteCategory: (req, res, next)=>{
        Category.findByIdAndDelete(req.body._id,(err, category)=>{
            if(category)res.json({message: 'Done'})
        })
    },
    //CONTROLLER SUB CATEGORYS
    addSubCategory: (req, res, next)=>{
        SubCategory.create({
            subCategory_name: req.body.subCategory_name,
            category: req.body.category_id
        },(err, subCategory)=>{
            if(subCategory)res.json({message: 'Done'})
        })
    },
    editSubCategory: (req, res, next)=>{
        SubCategory.findByIdAndUpdate(req.body.subCategory_id, {subCategory_name: req.body.subCategory_name}, (err, subCategory)=>{
            if(subCategory)res.json({message: 'Done'})
        })
    },
    removeSubCategory: (req, res, next)=>{
        SubCategory.findByIdAndRemove(req.body.subCategory_id, (err, subCategory)=>{
            if(subCategory)res.json({message: 'Done'})
        })
    }
}