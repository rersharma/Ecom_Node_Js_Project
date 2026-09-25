
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



module.exports={
    Addproduct,
    manage_product,
    delete_product
}