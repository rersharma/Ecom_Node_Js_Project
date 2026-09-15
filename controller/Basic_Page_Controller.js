const Home_page=(req,res)=>
{
    res.render("Home",{title:"Ecom-Home"})
}

const About_Page=(req,res)=>
{
     res.render("About",{title:"Ecom-About"})
}

const Contact_Page=(req,res)=>
{
     res.render("Contact",{title:"Ecom-Contact"})
}

module.exports={
     Home_page,
     About_Page,
     Contact_Page
}