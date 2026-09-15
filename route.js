const express=require('express') //framework for node.js
const route=express.Router() //router for express
const basic_control=require('./controller/Basic_Page_Controller')

route.get('/',basic_control.Home_page)
route.get('/about',basic_control.About_Page)
route.get('/contact',basic_control.Contact_Page)




module.exports=route