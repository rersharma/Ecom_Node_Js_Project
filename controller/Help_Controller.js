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
const customer_reply=(req,res)=>
{
      if(!req.session.useremail)
               {
                    res.render('Login',{title:'Login',message:'Login First...'})
               }
    else{
            const data={
                id:req.body.id,
                reply:req.body.cust_reply
            }
            help_m.customer_updatereply(data,(err)=>
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
const admin_reply=(req,res)=>
{
   if(!req.session.adminemail)
   {
         res.render('Admin',{title:'Admin-Cpanel',message:'Login First.....'})
   }
   else 
   {
            const data={
                id:req.body.id,
                reply:req.body.admin_reply
            }
            help_m.admin_reply_update(data,(err)=>
            {
                if(err)
                {
                    res.render(err)
                }
                else 
                {
                    res.redirect('/Enquiry')
                }
            })
   }
}
const delete_ticket=(req,res)=>
{
    if(!req.session.useremail)
   {
            res.render('Login',{title:'Login',message:'Login First...'})
   }
   else 
   {
        const id=req.params.id
        help_m.delete_ticket(id,(err)=>
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

const delete_ticket_admin=(req,res)=>
{
    if(!req.session.adminemail)
   {
            res.render('Admin',{title:'Admin-Cpanel',message:'Login First.....'})
   }
   else 
   {
        const id=req.params.id
        help_m.delete_ticket(id,(err)=>
        {
            if(err)
            {
                res.render(err)
            }
            else 
            {
                res.redirect('/Enquiry')
            }
        })
   }
}

module.exports={
    myenquiry,
    add_ticket,
    List_enquiry,
    customer_reply,
    admin_reply,
    delete_ticket,
    delete_ticket_admin
}