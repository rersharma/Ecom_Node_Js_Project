
const productmodel=require('../model/productmodel')

const Addproduct=(req,res)=>
{
      if(!req.session.adminemail)
      {
         res.render('Admin',{title:'Admin-Cpanel',message:'Login First.....'})
      }
      else 
      {
          if(req.method=='GET')
          {
              res.render('Add_Product',{title:'Add Product'})
          }
          else 
          {
            if(!req.file)
            {
                return res.render('Add_Product',{title:'Add Product',message:'Please select a product photo'})
            }

            const productdata={
                  name:req.body.pname,
                  type:req.body.ptype,
                  price:req.body.pprice,
                  stock:req.body.pstock,
                  discount:req.body.pdiscount,
                  photo:req.file.filename,
                  description:req.body.pdescription
            }
             productmodel.addproducts(productdata,(err)=>
            {
                 if(err)
                 {
                     console.error(err)
                     return res.status(500).render('Add_Product',{title:'Add Product',message:'Failed to add product. Please try again.'})
                 }
                 else
                 {
                     res.render('Add_Product',{title:'Add Product',message:'Product Added Successfully'})
                 }
            })
          }
      }
}

const manage_product=(req,res)=>
{
       if(!req.session.adminemail)
      {
         res.render('Admin',{title:'Admin-Cpanel',message:'Login First.....'})
      }
      else 
      {
             productmodel.view_product((err,result)=>
            {
                 if(err){
                    res.render(err)
                 }
                 else 
                 {
                      res.render('Manage_Product',{title:"Manage Product",record:result})
                 }
            })
      }
}
const delete_product=(req,res)=>
{
       if(!req.session.adminemail)
      {
         res.render('Admin',{title:'Admin-Cpanel',message:'Login First.....'})
      }
      else 
      {
        const pid=req.params.id
        productmodel.delpro(pid,(err)=>
        {
            if(err)
            {
                 res.render(err)
            }
            else 
            {
                 res.redirect('/Manage_product')
            }
        })

      }
}
const update_product=(req,res)=>
{
     if(!req.session.adminemail)
      {
         res.render('Admin',{title:'Admin-Cpanel',message:'Login First.....'})
      }
      else 
      {
        if(req.file)
        {
           productdata={
                id:req.body.pid,
                name:req.body.pname,
                type:req.body.ptype,
                price:req.body.pprice,
                stock:req.body.pstock,
                discount:req.body.pdiscount,
                photo:req.file.filename,
                description:req.body.pdescription
            }
            productmodel.updatepro(productdata,(err)=>
            {
                 if(err)
                 {
                     console.log(err)
                 }
                 else 
                 {
                      res.redirect('/Manage_product')
                 }
            })
        }
        else 
        {
           productdata2={
             id:req.body.pid,
             name:req.body.pname,
             type:req.body.ptype,
             price:req.body.pprice,
             stock:req.body.pstock,
             discount:req.body.pdiscount,
             description:req.body.pdescription
           }
           productmodel.updatepro2(productdata2,(err)=>
            {
                 if(err)
                 {
                     console.log(err)
                 }
                 else 
                 {
                      res.redirect('/Manage_product')
                 }
            })
           
        }
      }
}

const detail_product=(req,res)=>
{
     if(!req.session.useremail)
   {
         res.render('Login',{title:'Login',message:'Login First...'})
   }
   else 
   {
         const pid=req.body.pid 
       productmodel.product_info(pid,(err,result)=>
        {
             if(err)
             {
                 res.render(err)
             }
             else 
             {
                res.render('product_info',{title:'Detail Product',data:result})
             }
        })
   }
}

const order_now=(req,res)=>
{
         if(!req.session.useremail)
          {
               res.render('Login',{title:'Login',message:'Login First...'})
          }
          else{
                const pid=req.body.pid 
                const qnty=req.body.qnty
                productmodel.product_info(pid,(err,result)=>
                {
                     if(err)
                     {
                         res.render(err)
                     }
                     else 
                     {
                         const data={
                         pid:result[0].id,
                         qnty:qnty,
                         ptype:result[0].type,
                         pname:result[0].name,
                         pprice:result[0].price,
                         pphoto:result[0].photo,
                         total_price:parseInt(result[0].price)*parseInt(req.body.qnty),
                         customer_email:req.session.useremail
                         }
                         productmodel.take_order(data,(err)=>
                         {
                              if(err)
                              {
                                  res.render(err)
                              }
                              else 
                              {
                                  res.render('order_success',{title:'Order Success',message:'Your order has been placed successfully!'})
                              }
                         })
                    }

                     })
                }
          }

          const customer_order=(req,res)=>
          {
               if(!req.session.useremail)
               {
                    res.render('Login',{title:'Login',message:'Login First...'})
               }
               else{
    
                       const email=req.session.useremail
                       productmodel.cust_order(email,(err,result)=>{
                         if(err)
                         {
                               res.render(err)
                         }
                         else 
                         {
                              res.render('customer_order',{title:'My Order',record:result})
                         }

                       })

               }
          }


module.exports={
    Addproduct,
    manage_product,
    delete_product,
    update_product,
    detail_product,
    customer_order,
    order_now
}