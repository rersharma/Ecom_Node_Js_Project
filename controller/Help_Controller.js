const help_m=require("../model/Helpmodel")

const myenquiry=(req,res)=>
{
     if(!req.session.useremail)
               {
                    res.render('Login',{title:'Login',message:'Login First...'})
               }
    else{
                help_m.help_list((err,result)=>
                {
                    if(err)
                    {
                        res.render(err)
                    }
                    else
                    {
                        res.render("customer_ticket",{title:'My Tickets',record:result})
                    }
                })
        }
}
const add_ticket=(req,res)=>
{
     if(!req.session.useremail)
               {
                    res.render('Login',{title:'Login',message:'Login First...'})
               }
    else{
                const useremail=req.session.useremail
                const subject=req.body.subject
                const query=req.body.query
                const mydata={
                    useremail:useremail,
                    subject:subject,
                    query:query
                }
                help_m.add_t(mydata,(err)=>
                {
                    if(err)
                    {
                        res.render(err)
                    }
                    else 
                    {
                        res.redirect('/customer_ticket')
                    }
                })
    }
}
const List_enquiry=(req,res)=>
{
        if(!req.session.adminemail)
   {
         res.render('Admin',{title:'Admin-Cpanel',message:'Login First.....'})
   }
   else 
   {
            help_m.help_list((err,result)=>
                {
                    if(err)
                    {
                        res.render(err)
                    }
                    else
                    {
                        res.render('Admin_Inbox',{title:'Admin-Inbox',record:result})
                    }
                })
   }
}
module.exports={
    myenquiry,
    add_ticket,
    List_enquiry
}