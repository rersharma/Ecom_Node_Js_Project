const express=require('express') //framework for node.js
const route=express.Router() //router for express

const multer=require('multer') //for image upload
const path=require('path')

const stroage=multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,'product_photo/');
    },
    filename:function(req,file,cb){
        const uniquename=Date.now()+ '-' + file.originalname;
        cb(null,uniquename)
    }
})

const upload=multer({
    storage:stroage
})


const basic_control=require('./controller/Basic_Page_Controller')
const account_control=require('./controller/Account_Controller')
const admin_control=require('./controller/Admin_Controller')
const product_control=require('./controller/Product_Controller')

//------------------User Code

route.get('/',basic_control.Home_page)
route.get('/about',basic_control.About_Page)
route.get('/contact',basic_control.Contact_Page)
route.use('/login',account_control.login_page)
route.use('/signup',account_control.newuser)
route.use('/dashboard',account_control.dashboard)
route.get('/customer_logout',account_control.signout)

//----------------------Admin Code--------------------
route.use('/admin',admin_control.admin_login_check)
route.get('/admin_dash',admin_control.admin_dashboard)
route.get('/admin_logout',admin_control.admin_logout)

//-----------------------Product Code-------------------------
route.use('/add_product',upload.single('pphoto'),product_control.Addproduct)
route.use('/Manage_product',product_control.manage_product)
route.use('/delete_product/:id',product_control.delete_product)

module.exports=route