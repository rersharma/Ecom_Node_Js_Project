const express=require('express') //framework for node.js
const route=express.Router() //router for express
const basic_control=require('./controller/Basic_Page_Controller')
const account_control=require('./controller/Account_Controller')

route.get('/',basic_control.Home_page)
route.get('/about',basic_control.About_Page)
route.get('/contact',basic_control.Contact_Page)
route.use('/login',account_control.login_page)
route.use('/signup',account_control.newuser)





module.exports=route