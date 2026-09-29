
const signup=require('../model/usermodel')
const product=require('../model/productmodel')

const login_page=(req,res)=>
{
    if(req.method=='GET'){
       res.render('Login',{title:'Login'})
    }
    else{
           const data={
            email:req.body.email,
            password:req.body.password
           }
           signup.check_user(data,(err,result)=>
         {
             if(err)
             {
               console.error(err)
               return res.status(500).render('Login',{title:'Login',message:'Database error. Please try again.'})
             }
             else 
             {
                  if(result.length==0)
                  {
                      res.render('Login',{title:'Login',message:'Invalid Login Credentials'})
                  }
                  else 
                  {
                     req.session.useremail=data.email
                     res.redirect('/dashboard')
                  }
             }
         })
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
   if(!req.session.useremail)
   {
         res.render('Login',{title:'Login',message:'Login First...'})
   }
   else 
   {
         product.view_product((err,result)=>
        {
            if(err)
            {
                 res.render(err)
            }
            else 
            {
               res.render('customer_dashboard',{title:'Dashboard',record:result})
            }
        })
        
   }
}

const signout=(req,res)=>{
      req.session.destroy()
      res.render('Login',{title:'Login',message:'Logout Successfully'})
}

const display_customer=(req,res)=>
{
    signup.get_data((err,result)=>
    {
        if(err)
        {
             res.render(err)
        }
        else 
        {
             res.render('Manage_user',{title:'Manage Users',record:result})
        }
    })
}



module.exports={
    login_page,
    newuser,
    dashboard,
    signout,
    display_customer
}