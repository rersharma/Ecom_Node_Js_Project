
const signup=require('../model/usermodel')


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
          const userdata={
            n:req.body.name,
            email:req.body.email,
            password:req.body.password,
            mobile:req.body.mobile,
            gender:req.body.gender,
            address:req.body.address,
            state:req.body.state
          }

          signup.create_user(userdata,(err)=>
        {
              if(err)
              {
                 console.log(err)
              }
              else 
              {
                 res.render('Signup',{title:'Newuser',message:userdata.n+' Account Created Successfully'})
              }
        })
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