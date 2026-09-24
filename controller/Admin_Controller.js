
const admin=require('../model/adminmodel')

const admin_login_check=(req,res)=>
{
    if(req.method=='GET')
    {
         res.render('Admin',{title:"Admin-Cpanel"})
    }
    else
    {
         const data={
             email:req.body.email,
             password:req.body.password
         }

          admin.check_admin(data,(err,result)=>
        {
             if(err)
             {
                 console.error(err)
                 return res.status(500).render('Admin',{title:'Admin-Cpanel',message:'Database error. Please try again.'})
             }
             if(result.length==0)
             {
                 res.render('Admin',{title:'Admin-Cpanel',message:'Invalid Login Details'})
             }
             else 
             {
                 req.session.adminemail=data.email
                 res.redirect('/admin_dash')
             }
        })


    }
}

const admin_dashboard=(req,res)=>
{
   if(!req.session.adminemail)
   {
         res.render('Admin',{title:'Admin-Cpanel',message:'Login First.....'})
   }
   else 
   {
        res.render('Admin_dashboard',{title:'Admin-Dashboard'})
   }
}
const admin_logout=(req,res)=>
{
     req.session.destroy()
     res.render('Admin',{title:'Admin-CPanel',message:'Logout Successfully'})
}

module.exports={
    admin_login_check,
    admin_dashboard,
    admin_logout
}