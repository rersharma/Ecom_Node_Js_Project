const main=require('express') //framework for node.js 
const body_parser=require('body-parser')
const session=require('express-session')
const myapp=main() //creating express app
const route=require('./route') //importing route.js file
const port=2026


myapp.set('view engine', 'ejs') // find views folder and render ejs files
myapp.use(session({
    secret:"useremail",
    resave:false,
    saveUninitialize: false
}))

myapp.use(session({
    secret:"adminemail",
    resave:false,
    saveUninitialize: false
}))


myapp.use(body_parser.urlencoded({extended:true})) // collect the form data any page

myapp.use("/static",main.static('static')) //requesting static folder for css,js and images

myapp.use('/',route) //requesting route.js file for routing


myapp.listen(port,()=>
{
    console.log(`Ecommerce Project By Pankaj Sharma  sep 2026 , Click Here http://localhost:${port}`)
})