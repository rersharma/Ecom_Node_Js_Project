
const login_page=(req,res)=>
{
    if(req.method=='GET'){
       res.render('Login',{title:'Login'})
    }
    else{
         
    }
}

const newuser=(req,res)=>
{
    if(req.method=='GET'){
         res.render('Signup',{title:'Newuser'})
    }
    else 
    {

    }
}
const dashboard=(req,res)=>
{
      if(req.method=='GET'){
         res.render('Dashboard',{title:'Dashboard'})
      }
}

module.exports={
    login_page,
    newuser,
    dashboard
}